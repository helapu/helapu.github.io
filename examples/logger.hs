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

main :: IO ()
main = do
   l <- initLogger
   logMessage l "holy"
   logMessage l "helapu"
   logStop l
   logMessage l "bad message"
