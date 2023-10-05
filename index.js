
// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  // Function to calculate distance from headquarters in feet
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // Assuming 1 block is 264 feet
  }
  
  // Function to calculate distance traveled in feet
  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264; // Assuming 1 block is 264 feet
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // $25 for a distance over 2000 feet
    } else {
      return 'cannot travel that far';
    }
  }
  