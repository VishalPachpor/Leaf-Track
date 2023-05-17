// Approval event handler
export function handleApproval(event: ApprovalEvent): void {
  // Create a new Approval entity
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Populate entity properties from the event
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  // Populate block-related properties
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // Save the entity
  entity.save();
}

// ApprovalForAll event handler
export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  // Create a new ApprovalForAll entity
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Populate entity properties from the event
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  // Populate block-related properties
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // Save the entity
  entity.save();
}

// OwnershipTransferred event handler
export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  // Create a new OwnershipTransferred entity
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Populate entity properties from the event
  entity.previousOwner = event.params.from;
  entity.newOwner = event.params.to;

  // Populate block-related properties
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // Save the entity
  entity.save();
}

// Transfer event handler
export function handleTransfer(event: TransferEvent): void {
  // Create a new Transfer entity
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Populate entity properties from the event
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  // Populate block-related properties
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // Save the entity
  entity.save();
}
