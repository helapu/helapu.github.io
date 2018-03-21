---
layout: post
title: haskell 并发示例00
categories: haskell
---

Haskell是适合并发和并行计算的，no side-effect的特性让你即使屎的架构也很容易写出正确的代码。  
《Haskell并行与并发编程》一书，第一次看是在连Haskell本身都没吃透的情况下进行的。你能想想当时有多惨吗？不过现在无障碍的撸了一串代码。  
看客别急，我与大家一起学习。  

<!--more-->

## 定时器

定时执行任务，不支持周期执行。 支持同时执行多个任务。
[下载原代码](/examples/reminders.hs)

```
import Control.Concurrent
import Text.Printf
import Control.Monad

main = loop
  where
    loop  = do
      s <- getLine
      if s == "exit" //支持输入exit来立即结束所有的任务 这肯定不好噻
        then return ()
        else do
                forkIO $ setReminder s
                loop

setReminder :: String -> IO ()
setReminder s = do
  let t = read s :: Int
  printf "ok, I'll remind you in %d seconds \n" t

  threadDelay (10^6 * t)
  printf "%d seconds is up! Bing! \n" t
```

## 日志系统

实现过程不关心锁，为何？抽象出了MVar呗。  
[下载原代码](/examples/logger.hs)

```
import Control.Concurrent
import Control.Monad

data Logger = Logger (MVar LogCommand)
data LogCommand = Message String | Stop (MVar ())

initLogger :: IO Logger
initLogger = do
  m <- newEmptyMVar
  let l = Logger m
  forkIO (logger l)
  return l

logger :: Logger -> IO ()
logger (Logger m) = loop
  where
    loop = do
      cmd <- takeMVar m
      case cmd of
        Message msg -> do
          putStrLn msg
          loop
        Stop s -> do
          putStrLn "Logger: stop"
          putMVar s ()

logMessage :: Logger -> String -> IO ()
logMessage (Logger m) s = do
  putMVar m (Message s)

logStop :: Logger -> IO ()
logStop (Logger m) = do
  s <- newEmptyMVar
  putMVar m (Stop s)
  takeMVar s


//测试使用我们的日志系统
//改天加上网络功能 提供rest api
main :: IO ()
main = do
   l <- initLogger
   logMessage l "holy"
   logMessage l "helapu"
   logStop l
   logMessage l "bad message"
```
