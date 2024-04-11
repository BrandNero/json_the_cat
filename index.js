const fetchBreedDescription = require("./breedFetcher");
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(desc);
  }
});
// it("return an error as the breed is invalid/non-existent.", (done) => {
//   fetchBreedDescription("husky", (err, desc) => {
//     assert.equal(err, null);

//     const expectedDesc = "Breed not found. Please try again.";
//     assert.equal(expectedDesc, desc.trim());
//     done();
//   });