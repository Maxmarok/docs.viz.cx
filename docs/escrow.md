# Trilateral deals

Trilateral transactions is a blockchain service that allows decentralized transfers of liquid tokens between accounts with the participation of a third party.

The third party guarantees the second party to the transaction (recipient) that if all the conditions agreed upon by both parties to the transaction are met, the other party will receive the entire amount of [liquid tokens](./economy.md#viz-token) due from the first party or their part, depending on the terms of the contract. And the first party (sender) guarantees that he will return the tokens to the sender if the recipient violates the terms of the contract. A third party may set a commission for their work.

Trilateral transactions can be used when the sender of funds and the recipient cannot fully trust each other, for example, when exchanging tokens of two blockchains. In this case, they can resort to the help of a third, more authoritative party who will help in a disputable situation, but will not be able to take the tokens for themselves.

## Stages of a three-way deal

### Create a trilateral deal

To create an agreement on a trilateral transaction, the initiator (the first party to the transaction, the sender) must form a transaction for concluding a trilateral transaction agreement.

It should indicate:

- the name of the recipient's account (second party),
- agent (third party) account name,
- a unique digital indicator of the contract (the initiator must indicate it himself, choosing any number from 0 to 4294967295),
- the amount of the transaction,
- the size of the commission in favor of the agent,
- the term of ratification (the time by which the agent and the other party must agree to the terms of the contract),
- the term of the agreement (the period after which either the recipient will be able to pick up the tokens himself, or the sender will be able to return them without the permission of a third party).

Also, in the transaction, if desired, other parameters of the transaction can be declared, which the blockchain will not take into account, but will save.

After sending the transaction, the blockchain will freeze on the initiator's balance the amount of tokens equal to the amount of the transaction and the agent's commission.

### Consent of the agent and the second party

For the contract to take effect, the agent and the other party must agree by sending a consent transaction to the three-way deal. In this case, both the agent and the other party must agree before the expiration of the ratification period. If the parties do not have time to agree before this deadline or refuse to agree, the contract will be canceled. If the contract is canceled, the initiator's funds will be unfrozen and returned to him.

After all parties agree to the contract, the agent will immediately receive his commission.

### Voluntary termination of the contract by the initiator and recipient

If the contract has not expired, either of the two parties (initiator and recipient) can send tokens to the opposite party.

Moreover, each participant has the right to indicate how many tokens the opposite side will receive. The specified amount will be debited from the frozen account in favor of the selected party. If, as a result, the amount of tokens on the frozen account turns out to be equal to 0, then the contract is considered completed. If any number of tokens remain on the frozen account, the agreement will not be completed until the parties agree on what to do with the balance.

### Dispute Resolution

If the parties cannot agree on who will get the tokens, or how many tokens should be transferred to each party from the frozen account, then either party (initiator or recipient), if the contract has not expired, send a transaction to the blockchain to initiate a dispute.

From this moment, the agent will have the entire amount of tokens on the frozen account at his disposal, and none of the parties, including the agent, will be able to reject the dispute.

As soon as the agent gets the opportunity to dispose of the assets of the frozen account, he must decide which of the two parties will receive (initiator or recipient) funds from the frozen account, and in what amount.

If, as a result of the agent's action, the amount on the account is equal to 0, then the contract will be completed. If the amount on the account turns out to be more than 0, then the contract will be valid until the agent sends all tokens from the account.

### Contract expiration

If the contract has expired, either of the two parties (initiator or recipient) will be able to collect or transfer to the other party any amount from the frozen account. After the contract expires, neither the initiator nor the recipient will be able to challenge each other's actions.
