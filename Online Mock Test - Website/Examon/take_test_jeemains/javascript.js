<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://www.javascriptsource.com -->

<!-- Begin
// Insert number of questions
var numQues = 90;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(90);

// Insert answers to questions
answers[0] = "2nπ";
answers[1] = "1";
answers[2] = "option 4";
answers[3] = "253";
answers[4] = "54756";
answers[5] = "a+b+c/3";
answers[6] = "3/16";
answers[7] = "31/50";
answers[8] = "option 3";
answers[9] = "In";
answers[10] = "3500";
answers[11] = "10/3";
answers[12] = "zero";
answers[13] = "(-1,-4)";
answers[14] = "option 1";
answers[15] = "n+1/2";
answers[16] = "option 3";
answers[17] = "1/y+1/x";
answers[18] = "option 2";
answers[19] = "none";
answers[20] = "option3";
answers[21] = "continous at x=0";
answers[22] = "1/n+1";
answers[23] = "af(a)";
answers[24] = "0";
answers[25] = "7x-y=6";
answers[26] = "x=1 y=1 z=1";
answers[27] = "rhombus";
answers[28] = "(-1,∞)";
answers[29] = "±3";
answers[30] = "1000m";
answers[31] = "12mm";
answers[32] = "1D";
answers[33] = "80km";
answers[34] = "5.6m";
answers[35] = "π/3";
answers[36] = "increase by 0.2%";
answers[37] = "option 2";
answers[38] = "NOR gate";
answers[39] = "0.1V/m";
answers[40] = "option2";
answers[41] = "1/3";
answers[42] = "option1";
answers[43] = "22N";
answers[44] = "option1";
answers[45] = "110 km/s";
answers[46] = "2:1";
answers[47] = "24/16";
answers[48] = "option2";
answers[49] = "direct wave";
answers[50] = "-9Gm/r";
answers[51] = "1/15m/s";
answers[52] = "option3";
answers[53] = "P/2,T";
answers[54] = "increase";
answers[55] = "option1";
answers[56] = "1/4";
answers[57] = "2";
answers[58] = "option1";
answers[59] = "5 to 4";
answers[60] = "carbocation";
answers[61] = "Silicon";
answers[62] = "Li2O+NO2+O2";
answers[63] = "XeF2";
answers[64] = "22.05g";
answers[65] = "128pm";
answers[66] = "carbohydrates";
answers[67] = "salicylic acid";
answers[68] = "CH3COOH";
answers[69] = "400 and 600";
answers[70] = "46.06min";
answers[71] = "X4Y3";
answers[72] = "option1";
answers[73] = "HCHO";
answers[74] = "o-nitrophenol";
answers[75] = "1:36";
answers[76] = "7.01";
answers[77] = "350";
answers[78] = "benzoic acid";
answers[79] = "chair";
answers[80] = "Neutron particle emission";
answers[81] = "cytosine and thymine";
answers[82] = "SF4";
answers[83] = "option2";
answers[84] = "Cu+SO2";
answers[85] = "HgNH2Cl";
answers[86] = "steric hindrance";
answers[87] = "enamine";
answers[88] = "option3";
answers[89] = "Galena";





    

// Do not change anything below here ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score*4);
  form.percentage.value = score;
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}
//  End -->