/*
 * Complete the 'checkMagazine' function below.
 *
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
  // look through magazine to build
  // the note with words in the magazine
  let possible = false;

  // O(n^2)
  for (let i = 0; i < note.length; i++) {
    const search = magazine.indexOf(note[i]);
    if (search === -1) {
      possible = false;
      break;
    }
    magazine[search] = "";
    possible = true;
  }
  console.log(possible ? "Yes" : "No");
}
