## Prepare

```
npx hardhat typechain
```

## Run test

```
npx hardhat test test/Send-Receive.ts
```

result:

```
  Sender and Receiver
Final Gas Usage Report:
Number of iterations 0 - Gas used: 5168
Number of iterations 50 - Gas used: 14718
Number of iterations 99 - Gas used: 24077
TransferUSDC transferUsdc _gasLimit should be 26485
    ✔ should CCIP message from sender to receiver (476ms)
```
