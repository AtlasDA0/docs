---
sidebar_position: 4
description: Explore all available raffles at the raffle dashboard.
---

# Calculating The Winner
After the raffle concludes, a winner is randomly selected, and the NFT can be claimed from the escrow contract.

## Verifiable Randomness Source
When a raffle is created, a message to provide the raffle a randomness source is sent to nois.network,
& waits for the nois response beacon. No other address other than the nois_proxy address may provide the randomness source, **ensuring that randomness is not predicatable, and actually random.** 

## Ticket Weights
Currently all tickets are of equal weights. Future iterations will have tiered ticket weight support, for more customizable raffle ticket sale events.

## [Roadmap](../introduction/atlas-dapp/roadmap)