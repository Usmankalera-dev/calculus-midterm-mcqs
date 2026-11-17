/* Calculus Midterm MCQs — practice site.
   Generated from data/mcqs.json (300 questions, sympy-verified).
   Regenerate with: python3 gen/build_mcqs_js.py
   Fields: n, topic (slug), q, options[4], answer (A-D), explain. */
const MCQS = [
 {
  "n": 1,
  "topic": "function",
  "q": "Function ki definition kya hai?",
  "options": [
   "Har output ka exactly ek input hota hai",
   "Har input ka exactly ek output hota hai",
   "Har input ke do outputs hote hain",
   "Output ka input se koi talluq nahi hota"
  ],
  "answer": "B",
  "explain": "Function mein har input (x) ka sirf ek output (y) hota hai."
 },
 {
  "n": 2,
  "topic": "function",
  "q": "Domain se kya murad hai?",
  "options": [
   "Function ke tamam possible input values (x) ka set",
   "Function ki slope",
   "Graph ki height",
   "Function ke tamam possible output values (y) ka set"
  ],
  "answer": "A",
  "explain": "Domain woh x-values hain jin par function define hota hai."
 },
 {
  "n": 3,
  "topic": "function",
  "q": "Range se kya murad hai?",
  "options": [
   "Function ka maximum point",
   "Graph ki width",
   "Function ke tamam possible input values (x) ka set",
   "Function ke tamam possible output values (y) ka set"
  ],
  "answer": "D",
  "explain": "Range woh y-values hain jo function kabhi leta hai."
 },
 {
  "n": 4,
  "topic": "function",
  "q": "Vertical line test kis kaam aata hai?",
  "options": [
   "Limit nikalne ke liye",
   "Graph ki slope nikalne ke liye",
   "Ye check karne ke liye ke graph function hai ya nahi",
   "Function ka domain nikalne ke liye"
  ],
  "answer": "C",
  "explain": "Agar vertical line graph ko ek se zyada jagah kaate to woh function nahi hai."
 },
 {
  "n": 5,
  "topic": "function",
  "q": "Kaun sa relation function hai?",
  "options": [
   "{(1, 2), (1, 3), (2, 4)}",
   "{(1, 1), (1, 2), (1, 3)}",
   "{(1, 2), (2, 3), (3, 4)}",
   "{(2, 1), (2, 2), (3, 1)}"
  ],
  "answer": "C",
  "explain": "Function mein ek x ki do alag y-values nahi ho sakti."
 },
 {
  "n": 6,
  "topic": "function",
  "q": "f(x) = x^2 ka domain kya hai?",
  "options": [
   "y >= 0",
   "tamam real numbers",
   "x >= 0",
   "x != 0"
  ],
  "answer": "B",
  "explain": "x^2 har real x ke liye define hota hai."
 },
 {
  "n": 7,
  "topic": "function",
  "q": "f(x) = 1/(3*x - 9) ka domain kya hai?",
  "options": [
   "x != 3",
   "tamam real numbers",
   "x != 3 (alt)",
   "x > 3"
  ],
  "answer": "A",
  "explain": "Denominator zero nahi ho sakta, is liye x = 3 domain mein nahi hai."
 },
 {
  "n": 8,
  "topic": "function",
  "q": "f(x) = sqrt(x - 4) ka domain kya hai?",
  "options": [
   "x > 4",
   "x <= 4",
   "tamam real numbers",
   "x >= 4"
  ],
  "answer": "D",
  "explain": "Square root ke andar wali value negative nahi ho sakti."
 },
 {
  "n": 9,
  "topic": "function",
  "q": "f(x) = 1/sqrt(x - 3) ka domain kya hai?",
  "options": [
   "x > 3",
   "x < 3",
   "x >= 3",
   "tamam real numbers"
  ],
  "answer": "A",
  "explain": "Square root ke andar wali value positive honi chahiye aur denominator zero nahi ho sakta."
 },
 {
  "n": 10,
  "topic": "function",
  "q": "f(x) = ln(x - 2) ka domain kya hai?",
  "options": [
   "x < 2",
   "x > 2",
   "x >= 2",
   "tamam real numbers"
  ],
  "answer": "B",
  "explain": "ln sirf positive values ke liye define hota hai."
 },
 {
  "n": 11,
  "topic": "function",
  "q": "f(x) = 1/(x^2 + 3*x - 4) ka domain kya hai?",
  "options": [
   "x != -4",
   "tamam real numbers",
   "x != -4, x != 1",
   "x != 4, x != -1"
  ],
  "answer": "C",
  "explain": "Denominator zero hone par function define nahi hota, is liye dono roots domain se nikal do."
 },
 {
  "n": 12,
  "topic": "function",
  "q": "f(x) = (x + 3)^2 - 4 ki range kya hai?",
  "options": [
   "y <= -4",
   "y >= 4",
   "tamam real numbers",
   "y >= -4"
  ],
  "answer": "D",
  "explain": "Square kabhi negative nahi hota, is liye sab se chhoti value -4 hai."
 },
 {
  "n": 13,
  "topic": "function",
  "q": "f(x) = sqrt(x - 3) - 1 ki range kya hai?",
  "options": [
   "y > -1",
   "tamam real numbers",
   "y <= -1",
   "y >= -1"
  ],
  "answer": "D",
  "explain": "Square root ki sab se chhoti value 0 hoti hai, is liye y ki sab se chhoti value -1 hai."
 },
 {
  "n": 14,
  "topic": "function",
  "q": "f(x) = 1/(x - 3) ki range kya hai?",
  "options": [
   "tamam real numbers",
   "y != 0",
   "y >= 0",
   "y != 0 (alt)"
  ],
  "answer": "B",
  "explain": "1/(kuch bhi) kabhi 0 nahi hota, is liye y = 0 range mein nahi hai."
 },
 {
  "n": 15,
  "topic": "function",
  "q": "f(x) = 3^x ki range kya hai?",
  "options": [
   "y > 0",
   "y >= 0",
   "y != 0",
   "tamam real numbers"
  ],
  "answer": "A",
  "explain": "Exponential function ki value hamesha positive hoti hai."
 },
 {
  "n": 16,
  "topic": "function",
  "q": "f(x) = sin(x) + 3 ki range kya hai?",
  "options": [
   "tamam real numbers",
   "0 <= y <= 1",
   "2 <= y <= 4",
   "-1 <= y <= 1"
  ],
  "answer": "C",
  "explain": "sin(x) ki range -1 se 1 tak hoti hai, is liye poori range 2 se 4 tak shift ho jati hai."
 },
 {
  "n": 17,
  "topic": "function",
  "q": "f(x) = |x - 4| + 1 ki range kya hai?",
  "options": [
   "y > 1",
   "tamam real numbers",
   "y <= 1",
   "y >= 1"
  ],
  "answer": "D",
  "explain": "Absolute value ki sab se chhoti value 0 hoti hai, is liye y ki sab se chhoti value 1 hai."
 },
 {
  "n": 18,
  "topic": "function",
  "q": "f(x) = ln(x - 4) ki range kya hai?",
  "options": [
   "y >= 0",
   "tamam real numbers",
   "y != 0",
   "y > 0"
  ],
  "answer": "B",
  "explain": "ln ki output koi bhi real number ho sakti hai, is liye range tamam real numbers hai."
 },
 {
  "n": 19,
  "topic": "function",
  "q": "f(x) = 1/(3*x - 12) ka domain kya hai?",
  "options": [
   "x != 4 (alt)",
   "x > 4",
   "x != 4",
   "x < 4"
  ],
  "answer": "C",
  "explain": "Denominator zero nahi ho sakta, is liye x = 4 domain mein nahi hai."
 },
 {
  "n": 20,
  "topic": "function",
  "q": "f(x) = sqrt(2 - x) ka domain kya hai?",
  "options": [
   "x <= 2",
   "tamam real numbers",
   "x < 2",
   "x >= 2"
  ],
  "answer": "A",
  "explain": "Square root ke andar wali value negative nahi ho sakti."
 },
 {
  "n": 21,
  "topic": "function",
  "q": "f(x) = 1/sqrt(x - 8) ka domain kya hai?",
  "options": [
   "x < 8",
   "tamam real numbers",
   "x > 8",
   "x >= 8"
  ],
  "answer": "C",
  "explain": "Square root ke andar wali value positive honi chahiye aur denominator zero nahi ho sakta."
 },
 {
  "n": 22,
  "topic": "function",
  "q": "f(x) = ln(7 - x) ka domain kya hai?",
  "options": [
   "x < 7",
   "x > 7",
   "x <= 7",
   "tamam real numbers"
  ],
  "answer": "A",
  "explain": "ln sirf positive values ke liye define hota hai."
 },
 {
  "n": 23,
  "topic": "function",
  "q": "f(x) = 1/(x^2 - 7*x + 10) ka domain kya hai?",
  "options": [
   "tamam real numbers",
   "x != -2, x != -5",
   "x != 2",
   "x != 2, x != 5"
  ],
  "answer": "D",
  "explain": "Denominator zero hone par function define nahi hota, is liye dono roots domain se nikal do."
 },
 {
  "n": 24,
  "topic": "function",
  "q": "f(x) = (x - 4)^2 - 2 ki range kya hai?",
  "options": [
   "tamam real numbers",
   "y >= -2",
   "y >= 2",
   "y <= -2"
  ],
  "answer": "B",
  "explain": "Square kabhi negative nahi hota, is liye sab se chhoti value -2 hai."
 },
 {
  "n": 25,
  "topic": "function",
  "q": "f(x) = sqrt(x - 6) + 2 ki range kya hai?",
  "options": [
   "y <= 2",
   "tamam real numbers",
   "y > 2",
   "y >= 2"
  ],
  "answer": "D",
  "explain": "Square root ki sab se chhoti value 0 hoti hai, is liye y ki sab se chhoti value 2 hai."
 },
 {
  "n": 26,
  "topic": "function",
  "q": "f(x) = 1/(x - 1) ki range kya hai?",
  "options": [
   "y != 0",
   "tamam real numbers",
   "y != 0 (alt)",
   "y >= 0"
  ],
  "answer": "A",
  "explain": "1/(kuch bhi) kabhi 0 nahi hota, is liye y = 0 range mein nahi hai."
 },
 {
  "n": 27,
  "topic": "function",
  "q": "f(x) = e^x ki range kya hai?",
  "options": [
   "y >= 0",
   "y > 0",
   "tamam real numbers",
   "y != 0"
  ],
  "answer": "B",
  "explain": "Exponential function ki value hamesha positive hoti hai."
 },
 {
  "n": 28,
  "topic": "function",
  "q": "f(x) = sin(x) - 2 ki range kya hai?",
  "options": [
   "0 <= y <= 1",
   "-1 <= y <= 1",
   "-3 <= y <= -1",
   "tamam real numbers"
  ],
  "answer": "C",
  "explain": "sin(x) ki range -1 se 1 tak hoti hai, is liye poori range -3 se -1 tak shift ho jati hai."
 },
 {
  "n": 29,
  "topic": "function",
  "q": "f(x) = |x - 3| + 3 ki range kya hai?",
  "options": [
   "tamam real numbers",
   "y > 3",
   "y >= 3",
   "y <= 3"
  ],
  "answer": "C",
  "explain": "Absolute value ki sab se chhoti value 0 hoti hai, is liye y ki sab se chhoti value 3 hai."
 },
 {
  "n": 30,
  "topic": "function",
  "q": "f(x) = ln(x - 7) ki range kya hai?",
  "options": [
   "tamam real numbers",
   "y > 0",
   "y >= 0",
   "y != 0"
  ],
  "answer": "A",
  "explain": "ln ki output koi bhi real number ho sakti hai, is liye range tamam real numbers hai."
 },
 {
  "n": 31,
  "topic": "function",
  "q": "f(x) = 1/(3*x - 3) ka domain kya hai?",
  "options": [
   "x != 1 (alt)",
   "x > 1",
   "tamam real numbers",
   "x != 1"
  ],
  "answer": "D",
  "explain": "Denominator zero nahi ho sakta, is liye x = 1 domain mein nahi hai."
 },
 {
  "n": 32,
  "topic": "function",
  "q": "f(x) = sqrt(x - 9) ka domain kya hai?",
  "options": [
   "tamam real numbers",
   "x >= 9",
   "x > 9",
   "x <= 9"
  ],
  "answer": "B",
  "explain": "Square root ke andar wali value negative nahi ho sakti."
 },
 {
  "n": 33,
  "topic": "function",
  "q": "f(x) = ln(x - 5) ka domain kya hai?",
  "options": [
   "x < 5",
   "x >= 5",
   "x > 5",
   "tamam real numbers"
  ],
  "answer": "C",
  "explain": "ln sirf positive values ke liye define hota hai."
 },
 {
  "n": 34,
  "topic": "function",
  "q": "f(x) = 1/(x^2 - 3*x - 10) ka domain kya hai?",
  "options": [
   "x != -2, x != 5",
   "tamam real numbers",
   "x != 2, x != -5",
   "x != -2"
  ],
  "answer": "A",
  "explain": "Denominator zero hone par function define nahi hota, is liye dono roots domain se nikal do."
 },
 {
  "n": 35,
  "topic": "function",
  "q": "f(x) = (x - 2)^2 + 1 ki range kya hai?",
  "options": [
   "tamam real numbers",
   "y <= 1",
   "y >= -1",
   "y >= 1"
  ],
  "answer": "D",
  "explain": "Square kabhi negative nahi hota, is liye sab se chhoti value 1 hai."
 },
 {
  "n": 36,
  "topic": "limits-simple",
  "q": "Limit ki definition kya hai?",
  "options": [
   "Function ka maximum point",
   "x kisi value ke qareeb jaye to f(x) jis value ke qareeb jata hai",
   "Function ki slope",
   "x kisi value par f(x) ki exact value"
  ],
  "answer": "B",
  "explain": "Limit batati hai ke f(x), x = a ke qareeb kis value ki taraf jata hai."
 },
 {
  "n": 37,
  "topic": "limits-simple",
  "q": "lim x->a f(x) exist karne ki shart kya hai?",
  "options": [
   "f(a) define ho",
   "Left hand limit aur right hand limit barabar hon",
   "Limit 0 ho",
   "Function continuous ho"
  ],
  "answer": "B",
  "explain": "Agar left aur right limit alag hon to limit exist nahi karti."
 },
 {
  "n": 38,
  "topic": "limits-simple",
  "q": "0/0 form ko kya kehte hain?",
  "options": [
   "Indeterminate form",
   "Infinite form",
   "Undefined form",
   "Removable form"
  ],
  "answer": "A",
  "explain": "0/0 ka matlab hai ke limit ko aur kaam kar ke nikalna parega (factor ya conjugate)."
 },
 {
  "n": 39,
  "topic": "limits-simple",
  "q": "Agar left limit 2 aur right limit 3 ho to lim x->a f(x) kya hai?",
  "options": [
   "5",
   "3",
   "Limit exist nahi karti",
   "2"
  ],
  "answer": "C",
  "explain": "Limit tab hi exist karti hai jab left aur right limit barabar hon."
 },
 {
  "n": 40,
  "topic": "limits-simple",
  "q": "lim x->0 (-x^2 + 2*x - 1) = ?",
  "options": [
   "-2",
   "0",
   "1",
   "-1"
  ],
  "answer": "D",
  "explain": "Polynomial mein seedha x = 0 daal do, limit wohi value hoti hai."
 },
 {
  "n": 41,
  "topic": "limits-simple",
  "q": "lim x->-3 ((-4*x^2 + 2*x + 3)/(x + 4)) = ?",
  "options": [
   "-39",
   "39",
   "-38",
   "-40"
  ],
  "answer": "A",
  "explain": "Denominator zero nahi hai, is liye seedha x = -3 daal do."
 },
 {
  "n": 42,
  "topic": "limits-simple",
  "q": "lim x->3 ((x^2 + x - 12)/(x - 3)) = ?",
  "options": [
   "6",
   "8",
   "7",
   "-7"
  ],
  "answer": "C",
  "explain": "Numerator ko factor karo, (x - 3) cancel ho jata hai, phir x = 3 daalo."
 },
 {
  "n": 43,
  "topic": "limits-simple",
  "q": "lim x->25 ((sqrt(x) - 5)/(x - 25)) = ?",
  "options": [
   "-1/10",
   "1/10",
   "-9/10",
   "11/10"
  ],
  "answer": "B",
  "explain": "Conjugate (sqrt(x) + 5) se multiply karo, phir simplify kar ke x = 25 daalo."
 },
 {
  "n": 44,
  "topic": "limits-simple",
  "q": "lim x->0+ (|x|/x) = ?",
  "options": [
   "-1",
   "limit exist nahi karti",
   "0",
   "1"
  ],
  "answer": "D",
  "explain": "x > 0 ke liye |x| = x hota hai, is liye |x|/x = 1."
 },
 {
  "n": 45,
  "topic": "limits-simple",
  "q": "lim x->infinity ((3*x - 1)/(3*x^2 + 3*x + 2)) = ?",
  "options": [
   "infinity",
   "-infinity",
   "0",
   "1"
  ],
  "answer": "C",
  "explain": "Denominator ki degree zyada hai, is liye limit 0 hoti hai."
 },
 {
  "n": 46,
  "topic": "limits-simple",
  "q": "lim x->0 ((1 - cos(x))/x) = ?",
  "options": [
   "0",
   "1",
   "-1",
   "infinity"
  ],
  "answer": "A",
  "explain": "1 - cos(x) taqreeban x^2/2 hota hai, x se divide karne par 0 milta hai."
 },
 {
  "n": 47,
  "topic": "limits-simple",
  "q": "lim x->0 (-x^2 + 4*x + 1) = ?",
  "options": [
   "-1",
   "0",
   "2",
   "1"
  ],
  "answer": "D",
  "explain": "Polynomial mein seedha x = 0 daal do, limit wohi value hoti hai."
 },
 {
  "n": 48,
  "topic": "limits-simple",
  "q": "lim x->3 ((-5*x^2 + 5*x + 2)/(x + 1)) = ?",
  "options": [
   "-6",
   "-7",
   "7",
   "-8"
  ],
  "answer": "B",
  "explain": "Denominator zero nahi hai, is liye seedha x = 3 daal do."
 },
 {
  "n": 49,
  "topic": "limits-simple",
  "q": "lim x->-6 ((x^2 + 5*x - 6)/(x + 6)) = ?",
  "options": [
   "-8",
   "-6",
   "7",
   "-7"
  ],
  "answer": "D",
  "explain": "Numerator ko factor karo, (x + 6) cancel ho jata hai, phir x = -6 daalo."
 },
 {
  "n": 50,
  "topic": "limits-simple",
  "q": "lim x->4 ((sqrt(x) - 2)/(x - 4)) = ?",
  "options": [
   "-1/4",
   "5/4",
   "1/4",
   "-3/4"
  ],
  "answer": "C",
  "explain": "Conjugate (sqrt(x) + 2) se multiply karo, phir simplify kar ke x = 4 daalo."
 },
 {
  "n": 51,
  "topic": "limits-simple",
  "q": "lim x->0- (|x|/x) = ?",
  "options": [
   "-1",
   "0",
   "1",
   "limit exist nahi karti"
  ],
  "answer": "A",
  "explain": "x < 0 ke liye |x| = -x hota hai, is liye |x|/x = -1."
 },
 {
  "n": 52,
  "topic": "limits-simple",
  "q": "lim x->infinity ((3*x^2 - 4*x + 4)/(x^2 - 1)) = ?",
  "options": [
   "infinity",
   "3",
   "-infinity",
   "0"
  ],
  "answer": "B",
  "explain": "Dono ki degree barabar hai, is liye limit leading coefficients ka ratio hoti hai."
 },
 {
  "n": 53,
  "topic": "limits-simple",
  "q": "lim x->0 (sin(x)/(4*x)) = ?",
  "options": [
   "1/4",
   "infinity",
   "1",
   "0"
  ],
  "answer": "A",
  "explain": "sin(x)/x -> 1, is liye poori limit 1/4 hoti hai."
 },
 {
  "n": 54,
  "topic": "limits-simple",
  "q": "lim x->5 (3*x^2 - 2*x - 4) = ?",
  "options": [
   "-61",
   "61",
   "62",
   "60"
  ],
  "answer": "B",
  "explain": "Polynomial mein seedha x = 5 daal do, limit wohi value hoti hai."
 },
 {
  "n": 55,
  "topic": "limits-simple",
  "q": "lim x->0 ((-5*x^2 + 2*x + 6)/(x + 2)) = ?",
  "options": [
   "4",
   "2",
   "3",
   "-3"
  ],
  "answer": "C",
  "explain": "Denominator zero nahi hai, is liye seedha x = 0 daal do."
 },
 {
  "n": 56,
  "topic": "limits-simple",
  "q": "lim x->-3 ((x^3 + 27)/(x + 3)) = ?",
  "options": [
   "26",
   "-27",
   "28",
   "27"
  ],
  "answer": "D",
  "explain": "x^3 - a^3 = (x - a)(x^2 + ax + a^2), cancel kar ke x = -3 daalo."
 },
 {
  "n": 57,
  "topic": "limits-simple",
  "q": "lim x->16 ((sqrt(x) - 4)/(x - 16)) = ?",
  "options": [
   "-1/8",
   "-7/8",
   "1/8",
   "9/8"
  ],
  "answer": "C",
  "explain": "Conjugate (sqrt(x) + 4) se multiply karo, phir simplify kar ke x = 16 daalo."
 },
 {
  "n": 58,
  "topic": "limits-simple",
  "q": "lim x->-4+ (1/(x + 4)) = ?",
  "options": [
   "0",
   "1",
   "-infinity",
   "infinity"
  ],
  "answer": "D",
  "explain": "Right side se x, -4 ke qareeb aaye to denominator chhota positive hota hai, is liye value infinity ki taraf jati hai."
 },
 {
  "n": 59,
  "topic": "limits-simple",
  "q": "lim x->infinity ((3*x^3 + 3*x)/(3*x^2 + 1)) = ?",
  "options": [
   "infinity",
   "1",
   "0",
   "-infinity"
  ],
  "answer": "A",
  "explain": "Numerator ki degree zyada hai, is liye limit infinity ya -infinity hoti hai (sign leading coefficient par depend karta hai)."
 },
 {
  "n": 60,
  "topic": "limits-simple",
  "q": "lim x->3 (-4*x^2 - 3*x - 2) = ?",
  "options": [
   "-48",
   "-47",
   "-46",
   "47"
  ],
  "answer": "B",
  "explain": "Polynomial mein seedha x = 3 daal do, limit wohi value hoti hai."
 },
 {
  "n": 61,
  "topic": "limits-simple",
  "q": "lim x->5 ((-2*x^2 + x)/(x + 4)) = ?",
  "options": [
   "-6",
   "-5",
   "-4",
   "5"
  ],
  "answer": "B",
  "explain": "Denominator zero nahi hai, is liye seedha x = 5 daal do."
 },
 {
  "n": 62,
  "topic": "limits-simple",
  "q": "lim x->-2 ((x^2 + 6*x + 8)/(x + 2)) = ?",
  "options": [
   "3",
   "1",
   "2",
   "-2"
  ],
  "answer": "C",
  "explain": "Numerator ko factor karo, (x + 2) cancel ho jata hai, phir x = -2 daalo."
 },
 {
  "n": 63,
  "topic": "limits-simple",
  "q": "lim x->4+ (1/(x - 4)) = ?",
  "options": [
   "infinity",
   "1",
   "0",
   "-infinity"
  ],
  "answer": "A",
  "explain": "Right side se x, 4 ke qareeb aaye to denominator chhota positive hota hai, is liye value infinity ki taraf jati hai."
 },
 {
  "n": 64,
  "topic": "limits-simple",
  "q": "lim x->infinity (1/x^4) = ?",
  "options": [
   "-infinity",
   "infinity",
   "1",
   "0"
  ],
  "answer": "D",
  "explain": "x bara hota jaye to 1/x^4, 0 ke qareeb jata hai."
 },
 {
  "n": 65,
  "topic": "limits-simple",
  "q": "lim x->0 (tan(x)/x) = ?",
  "options": [
   "-1",
   "infinity",
   "0",
   "1"
  ],
  "answer": "D",
  "explain": "tan(x) = sin(x)/cos(x), aur sin(x)/x -> 1, cos(x) -> 1 hota hai."
 },
 {
  "n": 66,
  "topic": "limits-simple",
  "q": "lim x->3 (-4*x^2 - 4*x - 1) = ?",
  "options": [
   "-48",
   "49",
   "-49",
   "-50"
  ],
  "answer": "C",
  "explain": "Polynomial mein seedha x = 3 daal do, limit wohi value hoti hai."
 },
 {
  "n": 67,
  "topic": "limits-simple",
  "q": "lim x->2 ((x^2 - 5*x + 5)/(x + 5)) = ?",
  "options": [
   "-1/7",
   "-8/7",
   "6/7",
   "1/7"
  ],
  "answer": "A",
  "explain": "Denominator zero nahi hai, is liye seedha x = 2 daal do."
 },
 {
  "n": 68,
  "topic": "limits-simple",
  "q": "lim x->-4 ((x^3 + 64)/(x + 4)) = ?",
  "options": [
   "49",
   "48",
   "-48",
   "47"
  ],
  "answer": "B",
  "explain": "x^3 - a^3 = (x - a)(x^2 + ax + a^2), cancel kar ke x = -4 daalo."
 },
 {
  "n": 69,
  "topic": "limits-simple",
  "q": "lim x->9 ((sqrt(x) - 3)/(x - 9)) = ?",
  "options": [
   "7/6",
   "-1/6",
   "1/6",
   "-5/6"
  ],
  "answer": "C",
  "explain": "Conjugate (sqrt(x) + 3) se multiply karo, phir simplify kar ke x = 9 daalo."
 },
 {
  "n": 70,
  "topic": "limits-simple",
  "q": "lim x->-3+ (1/(x + 3)) = ?",
  "options": [
   "infinity",
   "0",
   "-infinity",
   "1"
  ],
  "answer": "A",
  "explain": "Right side se x, -3 ke qareeb aaye to denominator chhota positive hota hai, is liye value infinity ki taraf jati hai."
 },
 {
  "n": 71,
  "topic": "limits-simple",
  "q": "lim x->infinity (1/x^2) = ?",
  "options": [
   "1",
   "0",
   "infinity",
   "-infinity"
  ],
  "answer": "B",
  "explain": "x bara hota jaye to 1/x^2, 0 ke qareeb jata hai."
 },
 {
  "n": 72,
  "topic": "limits-simple",
  "q": "lim x->3 (-3*x^2 - 6*x - 2) = ?",
  "options": [
   "-46",
   "-48",
   "47",
   "-47"
  ],
  "answer": "D",
  "explain": "Polynomial mein seedha x = 3 daal do, limit wohi value hoti hai."
 },
 {
  "n": 73,
  "topic": "limits-simple",
  "q": "lim x->5 ((-4*x^2 - 4*x + 3)/(x + 1)) = ?",
  "options": [
   "-37/2",
   "39/2",
   "-41/2",
   "-39/2"
  ],
  "answer": "D",
  "explain": "Denominator zero nahi hai, is liye seedha x = 5 daal do."
 },
 {
  "n": 74,
  "topic": "limits-simple",
  "q": "lim x->2 ((x^2 - 4)/(x - 2)) = ?",
  "options": [
   "4",
   "-4",
   "5",
   "3"
  ],
  "answer": "A",
  "explain": "x^2 - a^2 = (x - a)(x + a), (x - a) cancel ho jata hai, phir x = 2 daalo."
 },
 {
  "n": 75,
  "topic": "limits-simple",
  "q": "lim x->0+ (1/(x - 0)) = ?",
  "options": [
   "-infinity",
   "infinity",
   "0",
   "1"
  ],
  "answer": "B",
  "explain": "Right side se x, 0 ke qareeb aaye to denominator chhota positive hota hai, is liye value infinity ki taraf jati hai."
 },
 {
  "n": 76,
  "topic": "limits-multi",
  "q": "Multivariable limit exist karne ki shart kya hai?",
  "options": [
   "Sirf ek path se value mile",
   "Limit 0 ho",
   "Har path se same value mile",
   "Function continuous ho"
  ],
  "answer": "C",
  "explain": "Limit tab hi exist karti hai jab (x,y) kisi bhi raste se (a,b) ki taraf jaye aur same value mile."
 },
 {
  "n": 77,
  "topic": "limits-multi",
  "q": "Agar do paths se alag values milen to limit ke baare mein kya kehte hain?",
  "options": [
   "Limit infinity hoti hai",
   "Limit exist nahi karti",
   "Limit 0 hoti hai",
   "Limit dono values ka average hoti hai"
  ],
  "answer": "B",
  "explain": "Ek bhi do paths se alag values mil jayen to limit exist nahi karti."
 },
 {
  "n": 78,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) check karne ka common tareeqa kya hai?",
  "options": [
   "Alag paths (y = 0, y = x, y = mx) par limit nikalna",
   "Function ko differentiate karna",
   "Sirf x = 0 par limit nikalna",
   "Graph ko dekhna"
  ],
  "answer": "A",
  "explain": "Paths par alag values milen to limit exist nahi karti, warna aur check karna parta hai."
 },
 {
  "n": 79,
  "topic": "limits-multi",
  "q": "Squeeze theorem multivariable limit mein kis kaam aata hai?",
  "options": [
   "Limit infinity prove karne ke liye",
   "Discontinuity dhoondne ke liye",
   "Limit 0 prove karne ke liye jab function bounded factor aur 0 ki taraf jane wale factor ka product ho",
   "Partial derivative nikalne ke liye"
  ],
  "answer": "C",
  "explain": "Agar |f(x,y)| <= g(x,y) aur g -> 0 ho to f -> 0 hota hai."
 },
 {
  "n": 80,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) x^3/(x^2 + y^2) = ?",
  "options": [
   "1",
   "limit exist nahi karti",
   "infinity",
   "0"
  ],
  "answer": "D",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 81,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (4*x*y)/(x^2 + y^2) = ?",
  "options": [
   "2",
   "0",
   "limit exist nahi karti",
   "1"
  ],
  "answer": "C",
  "explain": "y = 0 par limit 0 hai lekin y = x par limit 2 hai, is liye limit exist nahi karti."
 },
 {
  "n": 82,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x*y^3)/(x^2 + y^2) = ?",
  "options": [
   "0",
   "limit exist nahi karti",
   "1",
   "infinity"
  ],
  "answer": "A",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 83,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (2*x*y)/(x^2 + y^2) = ?",
  "options": [
   "limit exist nahi karti (alt)",
   "1",
   "0",
   "limit exist nahi karti"
  ],
  "answer": "D",
  "explain": "y = 0 par limit 0 hai lekin y = x par limit 1 hai, is liye limit exist nahi karti."
 },
 {
  "n": 84,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) x*y = ?",
  "options": [
   "infinity",
   "0",
   "limit exist nahi karti",
   "1"
  ],
  "answer": "B",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 85,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (3*x*y)/(x^2 + y^2) = ?",
  "options": [
   "1",
   "0",
   "limit exist nahi karti",
   "3/2"
  ],
  "answer": "C",
  "explain": "y = 0 par limit 0 hai lekin y = x par limit 3/2 hai, is liye limit exist nahi karti."
 },
 {
  "n": 86,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) sin(x^2 + y^2)/(x^2 + y^2) = ?",
  "options": [
   "1",
   "limit exist nahi karti",
   "0",
   "infinity"
  ],
  "answer": "A",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 87,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) x^2/(x^2 + y^2) = ?",
  "options": [
   "1",
   "limit exist nahi karti",
   "1/2",
   "0"
  ],
  "answer": "B",
  "explain": "Alag paths (jaise y = 0 aur y = x) se alag values milti hain, is liye limit exist nahi karti."
 },
 {
  "n": 88,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x^2 - y^2)/(x^2 + y^2) = ?",
  "options": [
   "1/2",
   "1",
   "0",
   "limit exist nahi karti"
  ],
  "answer": "D",
  "explain": "Alag paths (jaise y = 0 aur y = x) se alag values milti hain, is liye limit exist nahi karti."
 },
 {
  "n": 89,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x^3 - y^3)/(x^2 + y^2) = ?",
  "options": [
   "limit exist nahi karti",
   "infinity",
   "0",
   "1"
  ],
  "answer": "C",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 90,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x^3 + y^3)/(x^2 + y^2) = ?",
  "options": [
   "infinity",
   "1",
   "limit exist nahi karti",
   "0"
  ],
  "answer": "D",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 91,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x^2*y^2)/(x^2 + y^2) = ?",
  "options": [
   "infinity",
   "0",
   "1",
   "limit exist nahi karti"
  ],
  "answer": "B",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 92,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) y^2/(x^2 + y^2) = ?",
  "options": [
   "limit exist nahi karti",
   "1",
   "1/2",
   "0"
  ],
  "answer": "A",
  "explain": "Alag paths (jaise y = 0 aur y = x) se alag values milti hain, is liye limit exist nahi karti."
 },
 {
  "n": 93,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x*y)/(x^2 + y^2) = ?",
  "options": [
   "0",
   "limit exist nahi karti",
   "1",
   "1/2"
  ],
  "answer": "B",
  "explain": "Alag paths (jaise y = 0 aur y = x) se alag values milti hain, is liye limit exist nahi karti."
 },
 {
  "n": 94,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x^2*y)/(x^2 + y^2) = ?",
  "options": [
   "limit exist nahi karti",
   "1",
   "0",
   "infinity"
  ],
  "answer": "C",
  "explain": "Har path se same value milti hai (squeeze theorem se bhi 0 prove hota hai), is liye limit exist karti hai."
 },
 {
  "n": 95,
  "topic": "limits-multi",
  "q": "lim (x,y)->(0,0) (x^2*y)/(x^4 + y^2) = ?",
  "options": [
   "1/2",
   "1",
   "0",
   "limit exist nahi karti"
  ],
  "answer": "D",
  "explain": "Alag paths (jaise y = 0 aur y = x) se alag values milti hain, is liye limit exist nahi karti."
 },
 {
  "n": 96,
  "topic": "continuity",
  "q": "Function x = a par continuous hone ki teen shartein kya hain?",
  "options": [
   "f(a) define ho, limit exist kare, aur limit f(a) ke barabar ho",
   "Function differentiable ho",
   "f(a) = 0 ho, limit 0 ho",
   "Left limit right limit se bari ho"
  ],
  "answer": "A",
  "explain": "Teeno shartein poori hon to function x = a par continuous hota hai."
 },
 {
  "n": 97,
  "topic": "continuity",
  "q": "Removable discontinuity kya hoti hai?",
  "options": [
   "Limit exist kare lekin function define na ho ya value alag ho",
   "Left aur right limit alag hon",
   "Function define na ho aur limit bhi na ho",
   "Function infinity ki taraf jaye"
  ],
  "answer": "A",
  "explain": "Isay function ki value theek kar ke door kiya ja sakta hai."
 },
 {
  "n": 98,
  "topic": "continuity",
  "q": "Jump discontinuity kya hoti hai?",
  "options": [
   "Function infinity ki taraf jaye",
   "Limit exist kare lekin function define na ho",
   "Left aur right limit dono exist karen lekin barabar na hon",
   "Function har jagah continuous ho"
  ],
  "answer": "C",
  "explain": "Graph mein is jagah ek chhalang (jump) nazar aati hai."
 },
 {
  "n": 99,
  "topic": "continuity",
  "q": "Infinite discontinuity kya hoti hai?",
  "options": [
   "Limit exist kare lekin function define na ho",
   "Function kisi point par infinity ki taraf jaye",
   "Function ka graph seedha ho",
   "Left aur right limit alag hon"
  ],
  "answer": "B",
  "explain": "Jaise f(x) = 1/x, x = 0 par infinite discontinuity hai."
 },
 {
  "n": 100,
  "topic": "continuity",
  "q": "Rational function kahan discontinuous hoti hai?",
  "options": [
   "Jahan numerator zero ho",
   "Har jagah",
   "Kahin nahi",
   "Jahan denominator zero ho"
  ],
  "answer": "D",
  "explain": "Denominator zero hone par function define nahi hoti, is liye wahan discontinuity hoti hai."
 },
 {
  "n": 101,
  "topic": "continuity",
  "q": "f(x) = (x^2 - 4)/(x + 2), x = -2 par kis qisam ki discontinuity hai?",
  "options": [
   "infinite discontinuity",
   "jump discontinuity",
   "removable discontinuity",
   "koi discontinuity nahi"
  ],
  "answer": "C",
  "explain": "Limit exist karti hai (-4) lekin f(-2) define nahi, is liye removable discontinuity hai."
 },
 {
  "n": 102,
  "topic": "continuity",
  "q": "f(x) = -1 jab x < 0 aur f(x) = 1 jab x >= 0, x = 0 par kis qisam ki discontinuity hai?",
  "options": [
   "infinite discontinuity",
   "jump discontinuity",
   "removable discontinuity",
   "koi discontinuity nahi"
  ],
  "answer": "B",
  "explain": "Left limit -1 aur right limit 1 hai, dono exist karte hain lekin barabar nahi, is liye jump discontinuity hai."
 },
 {
  "n": 103,
  "topic": "continuity",
  "q": "f(x) = 1/(x + 2), x = -2 par kis qisam ki discontinuity hai?",
  "options": [
   "koi discontinuity nahi",
   "jump discontinuity",
   "removable discontinuity",
   "infinite discontinuity"
  ],
  "answer": "D",
  "explain": "Function x = -2 par infinity ki taraf jati hai, is liye infinite discontinuity hai."
 },
 {
  "n": 104,
  "topic": "continuity",
  "q": "f(x) = x - 3 jab x < 3, aur f(x) = k jab x >= 3. f ko x = 3 par continuous banane ke liye k = ?",
  "options": [
   "0",
   "-1",
   "1",
   "2"
  ],
  "answer": "A",
  "explain": "Continuous ke liye left limit = value honi chahiye, is liye k = 3 + -3 = 0."
 },
 {
  "n": 105,
  "topic": "continuity",
  "q": "f(x) = 1/(x^2 - 16) kis point par continuous nahi hai?",
  "options": [
   "x = 4 aur x = -4",
   "x = 4",
   "har jagah continuous hai",
   "x = 0"
  ],
  "answer": "A",
  "explain": "Denominator x = 4 aur x = -4 par zero hota hai, wahan function define nahi hoti."
 },
 {
  "n": 106,
  "topic": "continuity",
  "q": "f(x) = sqrt(x - 1) kis interval par continuous hai?",
  "options": [
   "x <= 1",
   "x >= 1",
   "x > 1",
   "tamam real numbers"
  ],
  "answer": "B",
  "explain": "Square root sirf x >= 1 par define hota hai, aur wahan continuous bhi hota hai."
 },
 {
  "n": 107,
  "topic": "continuity",
  "q": "f(x) = 4*x^3 - 5*x^2 + 5*x + 5, x = 2 par continuous hai?",
  "options": [
   "Nahi, infinite discontinuity hai",
   "Nahi, removable discontinuity hai",
   "Nahi, jump discontinuity hai",
   "Haan, polynomial har jagah continuous hota hai"
  ],
  "answer": "D",
  "explain": "Polynomial function har real number par continuous hoti hai."
 },
 {
  "n": 108,
  "topic": "continuity",
  "q": "f(x) = (x^2 - 4)/(x - 2), x = 2 par kis qisam ki discontinuity hai?",
  "options": [
   "jump discontinuity",
   "infinite discontinuity",
   "removable discontinuity",
   "koi discontinuity nahi"
  ],
  "answer": "C",
  "explain": "Limit exist karti hai (4) lekin f(2) define nahi, is liye removable discontinuity hai."
 },
 {
  "n": 109,
  "topic": "continuity",
  "q": "f(x) = |x|/x, x = 0 par kis qisam ki discontinuity hai?",
  "options": [
   "koi discontinuity nahi",
   "infinite discontinuity",
   "jump discontinuity",
   "removable discontinuity"
  ],
  "answer": "C",
  "explain": "Left limit -1 aur right limit 1 hai, dono exist karte hain lekin barabar nahi, is liye jump discontinuity hai."
 },
 {
  "n": 110,
  "topic": "continuity",
  "q": "f(x) = 1/(x - 5), x = 5 par kis qisam ki discontinuity hai?",
  "options": [
   "infinite discontinuity",
   "removable discontinuity",
   "jump discontinuity",
   "koi discontinuity nahi"
  ],
  "answer": "A",
  "explain": "Function x = 5 par infinity ki taraf jati hai, is liye infinite discontinuity hai."
 },
 {
  "n": 111,
  "topic": "continuity",
  "q": "f(x) = k*x jab x < 1, aur f(x) = x^2 + 0 jab x >= 1. f ko x = 1 par continuous banane ke liye k = ?",
  "options": [
   "-1",
   "1",
   "0",
   "2"
  ],
  "answer": "B",
  "explain": "Left limit = 1, right value = 1, barabar rakhne se k = 1 milta hai."
 },
 {
  "n": 112,
  "topic": "continuity",
  "q": "f(x) = 1/(x^2 - 9) kis point par continuous nahi hai?",
  "options": [
   "har jagah continuous hai",
   "x = 0",
   "x = 3",
   "x = 3 aur x = -3"
  ],
  "answer": "D",
  "explain": "Denominator x = 3 aur x = -3 par zero hota hai, wahan function define nahi hoti."
 },
 {
  "n": 113,
  "topic": "continuity",
  "q": "f(x) = 3*x^3 + 6*x^2 + 4, x = 2 par continuous hai?",
  "options": [
   "Nahi, infinite discontinuity hai",
   "Nahi, jump discontinuity hai",
   "Haan, polynomial har jagah continuous hota hai",
   "Nahi, removable discontinuity hai"
  ],
  "answer": "C",
  "explain": "Polynomial function har real number par continuous hoti hai."
 },
 {
  "n": 114,
  "topic": "continuity",
  "q": "f(x) = (x^2 - 36)/(x + 6), x = -6 par kis qisam ki discontinuity hai?",
  "options": [
   "koi discontinuity nahi",
   "jump discontinuity",
   "infinite discontinuity",
   "removable discontinuity"
  ],
  "answer": "D",
  "explain": "Limit exist karti hai (-12) lekin f(-6) define nahi, is liye removable discontinuity hai."
 },
 {
  "n": 115,
  "topic": "continuity",
  "q": "f(x) = 1/(x + 5)^2, x = -5 par kis qisam ki discontinuity hai?",
  "options": [
   "koi discontinuity nahi",
   "infinite discontinuity",
   "removable discontinuity",
   "jump discontinuity"
  ],
  "answer": "B",
  "explain": "Function x = -5 par infinity ki taraf jati hai, is liye infinite discontinuity hai."
 },
 {
  "n": 116,
  "topic": "continuity",
  "q": "f(x) = x - 2 jab x < 1, aur f(x) = k jab x >= 1. f ko x = 1 par continuous banane ke liye k = ?",
  "options": [
   "-1",
   "0",
   "-2",
   "1"
  ],
  "answer": "A",
  "explain": "Continuous ke liye left limit = value honi chahiye, is liye k = 1 + -2 = -1."
 },
 {
  "n": 117,
  "topic": "continuity",
  "q": "f(x) = 1/(x^2 - 4) kis point par continuous nahi hai?",
  "options": [
   "x = 0",
   "x = 2",
   "har jagah continuous hai",
   "x = 2 aur x = -2"
  ],
  "answer": "D",
  "explain": "Denominator x = 2 aur x = -2 par zero hota hai, wahan function define nahi hoti."
 },
 {
  "n": 118,
  "topic": "continuity",
  "q": "f(x) = sqrt(x - 2) kis interval par continuous hai?",
  "options": [
   "x <= 2",
   "x >= 2",
   "tamam real numbers",
   "x > 2"
  ],
  "answer": "B",
  "explain": "Square root sirf x >= 2 par define hota hai, aur wahan continuous bhi hota hai."
 },
 {
  "n": 119,
  "topic": "continuity",
  "q": "f(x) = -4*x^3 - 2*x^2 - 3*x + 5, x = 2 par continuous hai?",
  "options": [
   "Haan, polynomial har jagah continuous hota hai",
   "Nahi, jump discontinuity hai",
   "Nahi, removable discontinuity hai",
   "Nahi, infinite discontinuity hai"
  ],
  "answer": "A",
  "explain": "Polynomial function har real number par continuous hoti hai."
 },
 {
  "n": 120,
  "topic": "continuity",
  "q": "f(x) = (x^2 - 1)/(x - 1), x = 1 par kis qisam ki discontinuity hai?",
  "options": [
   "infinite discontinuity",
   "koi discontinuity nahi",
   "removable discontinuity",
   "jump discontinuity"
  ],
  "answer": "C",
  "explain": "Limit exist karti hai (2) lekin f(1) define nahi, is liye removable discontinuity hai."
 },
 {
  "n": 121,
  "topic": "continuity",
  "q": "f(x) = 1/(x - 0)^2, x = 0 par kis qisam ki discontinuity hai?",
  "options": [
   "koi discontinuity nahi",
   "jump discontinuity",
   "removable discontinuity",
   "infinite discontinuity"
  ],
  "answer": "D",
  "explain": "Function x = 0 par infinity ki taraf jati hai, is liye infinite discontinuity hai."
 },
 {
  "n": 122,
  "topic": "continuity",
  "q": "f(x) = 5*x + 1 jab x < 2, aur f(x) = 3*x + k jab x >= 2. f ko x = 2 par continuous banane ke liye k = ?",
  "options": [
   "5",
   "4",
   "6",
   "-5"
  ],
  "answer": "A",
  "explain": "Left limit = 11 aur right value = 6 + k, barabar rakhne se k = 5 milta hai."
 },
 {
  "n": 123,
  "topic": "continuity",
  "q": "f(x) = sqrt(x - 5) kis interval par continuous hai?",
  "options": [
   "tamam real numbers",
   "x >= 5",
   "x <= 5",
   "x > 5"
  ],
  "answer": "B",
  "explain": "Square root sirf x >= 5 par define hota hai, aur wahan continuous bhi hota hai."
 },
 {
  "n": 124,
  "topic": "continuity",
  "q": "f(x) = 4*x^3 + 6*x^2 + 6*x - 2, x = 3 par continuous hai?",
  "options": [
   "Nahi, infinite discontinuity hai",
   "Nahi, jump discontinuity hai",
   "Haan, polynomial har jagah continuous hota hai",
   "Nahi, removable discontinuity hai"
  ],
  "answer": "C",
  "explain": "Polynomial function har real number par continuous hoti hai."
 },
 {
  "n": 125,
  "topic": "continuity",
  "q": "f(x) = 1/(x + 5), x = -5 par kis qisam ki discontinuity hai?",
  "options": [
   "removable discontinuity",
   "koi discontinuity nahi",
   "infinite discontinuity",
   "jump discontinuity"
  ],
  "answer": "C",
  "explain": "Function x = -5 par infinity ki taraf jati hai, is liye infinite discontinuity hai."
 },
 {
  "n": 126,
  "topic": "deriv-basic",
  "q": "Derivative ki definition kya hai?",
  "options": [
   "lim x->a f(x)",
   "f(x+h) + f(x)",
   "lim h->0 (f(x+h) + f(x))/h",
   "lim h->0 (f(x+h) - f(x))/h"
  ],
  "answer": "D",
  "explain": "Derivative woh limit hai jo function ke change ki rate batati hai."
 },
 {
  "n": 127,
  "topic": "deriv-basic",
  "q": "Derivative geometrically kya dikhata hai?",
  "options": [
   "Graph ki height",
   "Tangent line ki slope",
   "Function ka maximum point",
   "Area under the curve"
  ],
  "answer": "B",
  "explain": "f'(a) woh slope hai jo graph ko x = a par chhoone wali tangent line ki hoti hai."
 },
 {
  "n": 128,
  "topic": "deriv-basic",
  "q": "d/dx (constant) = ?",
  "options": [
   "0",
   "x",
   "constant",
   "1"
  ],
  "answer": "A",
  "explain": "Constant ka derivative hamesha 0 hota hai."
 },
 {
  "n": 129,
  "topic": "deriv-basic",
  "q": "d/dx (2*x^5) = ?",
  "options": [
   "10*x^4",
   "-5*x^4",
   "5*x^4",
   "5*x^6"
  ],
  "answer": "A",
  "explain": "Power rule: d/dx (x^n) = n*x^(n-1) hota hai."
 },
 {
  "n": 130,
  "topic": "deriv-basic",
  "q": "d/dx (-5*x^3 + 6*x^2 + x - 1) = ?",
  "options": [
   "-15*x^2 + 12*x + 2",
   "-15*x^2 + 12*x + 1",
   "-15*x^2 + 10*x + 1",
   "-15*x^2 + 13*x + 1"
  ],
  "answer": "B",
  "explain": "Har term par power rule lagao aur constant ka derivative 0 hota hai."
 },
 {
  "n": 131,
  "topic": "deriv-basic",
  "q": "d/dx ((2*x + 3)^4) = ?",
  "options": [
   "2*(2*x + 3)^3",
   "8*(2*x + 3)^4",
   "8*(2*x + 3)^3",
   "16*(2*x + 3)^3"
  ],
  "answer": "C",
  "explain": "Chain rule: bahar wala derivative lo, phir andar wale ka derivative (2) se multiply karo."
 },
 {
  "n": 132,
  "topic": "deriv-basic",
  "q": "d/dx (sqrt(x^2 + 6)) = ?",
  "options": [
   "-x/sqrt(x^2 + 6)",
   "2*x/sqrt(x^2 + 6)",
   "1/sqrt(x^2 + 6)",
   "x/sqrt(x^2 + 6)"
  ],
  "answer": "D",
  "explain": "Chain rule: sqrt ka derivative 1/(2*sqrt(...)) aur andar (x^2 + 6) ka derivative 2x hai."
 },
 {
  "n": 133,
  "topic": "deriv-basic",
  "q": "d/dx (1/x^2) = ?",
  "options": [
   "-2*x^2",
   "-2/x^3",
   "-4/x^3",
   "2/x^3"
  ],
  "answer": "B",
  "explain": "1/x^n = x^(-n), power rule se derivative -n*x^(-n-1) hota hai."
 },
 {
  "n": 134,
  "topic": "deriv-basic",
  "q": "f(x) = 4*x^3 - 4*x^2 - 6*x - 1 ho to f''(x) = ?",
  "options": [
   "12*x^2 - 8*x - 6",
   "8*(3*x - 1) + 2",
   "-8*(3*x - 1)",
   "8*(3*x - 1)"
  ],
  "answer": "D",
  "explain": "Pehle f'(x) nikalo, phir uska dobara derivative lo."
 },
 {
  "n": 135,
  "topic": "deriv-basic",
  "q": "f(x) = -2*x^2 + 2*x - 1 ka x = 1 par slope (f'(1)) kya hai?",
  "options": [
   "-1",
   "-3",
   "-2",
   "2"
  ],
  "answer": "C",
  "explain": "Pehle f'(x) nikalo, phir x = 1 daal do."
 },
 {
  "n": 136,
  "topic": "deriv-basic",
  "q": "d/dx (x^6) = ?",
  "options": [
   "6*x^5",
   "-6*x^5",
   "6*x^7",
   "7*x^6"
  ],
  "answer": "A",
  "explain": "Power rule: d/dx (x^n) = n*x^(n-1) hota hai."
 },
 {
  "n": 137,
  "topic": "deriv-basic",
  "q": "d/dx (3*x^3 + 2*x^2 - 6*x - 6) = ?",
  "options": [
   "9*x^2 + 5*x - 6",
   "9*x^2 + 4*x - 6",
   "9*x^2 + 2*x - 6",
   "-9*x^2 - 4*x + 6"
  ],
  "answer": "B",
  "explain": "Har term par power rule lagao aur constant ka derivative 0 hota hai."
 },
 {
  "n": 138,
  "topic": "deriv-basic",
  "q": "d/dx ((2*x + 4)^2) = ?",
  "options": [
   "4*x + 8",
   "4*(2*x + 4)^2",
   "16*x + 32",
   "8*x + 16"
  ],
  "answer": "D",
  "explain": "Chain rule: bahar wala derivative lo, phir andar wale ka derivative (2) se multiply karo."
 },
 {
  "n": 139,
  "topic": "deriv-basic",
  "q": "d/dx (sqrt(x^2 + 3)) = ?",
  "options": [
   "x/sqrt(x^2 + 3)",
   "-x/sqrt(x^2 + 3)",
   "1/sqrt(x^2 + 3)",
   "2*x/sqrt(x^2 + 3)"
  ],
  "answer": "A",
  "explain": "Chain rule: sqrt ka derivative 1/(2*sqrt(...)) aur andar (x^2 + 3) ka derivative 2x hai."
 },
 {
  "n": 140,
  "topic": "deriv-basic",
  "q": "d/dx (1/x^1) = ?",
  "options": [
   "-2/x^2",
   "-x^2",
   "-1/x^2",
   "x^(-2)"
  ],
  "answer": "C",
  "explain": "1/x^n = x^(-n), power rule se derivative -n*x^(-n-1) hota hai."
 },
 {
  "n": 141,
  "topic": "deriv-basic",
  "q": "f(x) = x^3 - 5*x^2 - 4*x - 3 ho to f''(x) = ?",
  "options": [
   "-2*(3*x - 5)",
   "2*(3*x - 5) + 2",
   "2*(3*x - 5)",
   "3*x^2 - 10*x - 4"
  ],
  "answer": "C",
  "explain": "Pehle f'(x) nikalo, phir uska dobara derivative lo."
 },
 {
  "n": 142,
  "topic": "deriv-basic",
  "q": "f(x) = 5*x^2 + x + 3 ka x = -3 par slope (f'(-3)) kya hai?",
  "options": [
   "-29",
   "29",
   "-30",
   "-28"
  ],
  "answer": "A",
  "explain": "Pehle f'(x) nikalo, phir x = -3 daal do."
 },
 {
  "n": 143,
  "topic": "deriv-basic",
  "q": "d/dx (x^3) = ?",
  "options": [
   "4*x^3",
   "3*x^4",
   "-3*x^2",
   "3*x^2"
  ],
  "answer": "D",
  "explain": "Power rule: d/dx (x^n) = n*x^(n-1) hota hai."
 },
 {
  "n": 144,
  "topic": "deriv-basic",
  "q": "d/dx (2*x^3 + 6*x - 3) = ?",
  "options": [
   "-6*x^2 - 6",
   "6*x^2 + 6",
   "6*x^2 - 2*x + 6",
   "6*x^2 + 7"
  ],
  "answer": "B",
  "explain": "Har term par power rule lagao aur constant ka derivative 0 hota hai."
 },
 {
  "n": 145,
  "topic": "deriv-basic",
  "q": "d/dx ((3*x + 3)^2) = ?",
  "options": [
   "6*x + 6",
   "18*x + 18",
   "54*x + 54",
   "6*(3*x + 3)^2"
  ],
  "answer": "B",
  "explain": "Chain rule: bahar wala derivative lo, phir andar wale ka derivative (3) se multiply karo."
 },
 {
  "n": 146,
  "topic": "deriv-basic",
  "q": "d/dx (sqrt(3*x + 3)) = ?",
  "options": [
   "-sqrt(3)/(2*sqrt(x + 1))",
   "sqrt(3)/sqrt(x + 1)",
   "sqrt(3)/(6*sqrt(x + 1))",
   "sqrt(3)/(2*sqrt(x + 1))"
  ],
  "answer": "D",
  "explain": "Chain rule: sqrt ka derivative 1/(2*sqrt(...)) aur andar ka derivative 3 hai."
 },
 {
  "n": 147,
  "topic": "deriv-basic",
  "q": "f(x) = -3*x^3 - 6*x^2 + 2*x - 1 ho to f''(x) = ?",
  "options": [
   "2 - 6*(3*x + 2)",
   "-9*x^2 - 12*x + 2",
   "-6*(3*x + 2)",
   "6*(3*x + 2)"
  ],
  "answer": "C",
  "explain": "Pehle f'(x) nikalo, phir uska dobara derivative lo."
 },
 {
  "n": 148,
  "topic": "deriv-basic",
  "q": "f(x) = x^2 - 3*x + 4 ka x = 0 par slope (f'(0)) kya hai?",
  "options": [
   "-3",
   "3",
   "-2",
   "-4"
  ],
  "answer": "A",
  "explain": "Pehle f'(x) nikalo, phir x = 0 daal do."
 },
 {
  "n": 149,
  "topic": "deriv-basic",
  "q": "d/dx (4*x^4) = ?",
  "options": [
   "-4*x^3",
   "5*x^4",
   "16*x^3",
   "16*x^5"
  ],
  "answer": "C",
  "explain": "Power rule: d/dx (x^n) = n*x^(n-1) hota hai."
 },
 {
  "n": 150,
  "topic": "deriv-basic",
  "q": "d/dx ((4*x + 1)^4) = ?",
  "options": [
   "4*(4*x + 1)^3",
   "64*(4*x + 1)^3",
   "-16*(4*x + 1)^3",
   "16*(4*x + 1)^3"
  ],
  "answer": "D",
  "explain": "Chain rule: bahar wala derivative lo, phir andar wale ka derivative (4) se multiply karo."
 },
 {
  "n": 151,
  "topic": "deriv-basic",
  "q": "d/dx (1/x^3) = ?",
  "options": [
   "-6/x^4",
   "-3/x^4",
   "-3*x^2",
   "3/x^4"
  ],
  "answer": "B",
  "explain": "1/x^n = x^(-n), power rule se derivative -n*x^(-n-1) hota hai."
 },
 {
  "n": 152,
  "topic": "deriv-basic",
  "q": "f(x) = 4*x^3 + 4*x^2 - x - 1 ho to f''(x) = ?",
  "options": [
   "8*(3*x + 1)",
   "-8*(3*x + 1)",
   "8*(3*x + 1) + 2",
   "12*x^2 + 8*x - 1"
  ],
  "answer": "A",
  "explain": "Pehle f'(x) nikalo, phir uska dobara derivative lo."
 },
 {
  "n": 153,
  "topic": "deriv-basic",
  "q": "f(x) = 5*x^2 + 3*x - 5 ka x = 0 par slope (f'(0)) kya hai?",
  "options": [
   "4",
   "3",
   "2",
   "-3"
  ],
  "answer": "B",
  "explain": "Pehle f'(x) nikalo, phir x = 0 daal do."
 },
 {
  "n": 154,
  "topic": "deriv-basic",
  "q": "d/dx (-x^3 - 4*x^2 + 3*x - 4) = ?",
  "options": [
   "-3*x^2 - 8*x + 3",
   "-3*x^2 - 7*x + 3",
   "-3*x^2 - 8*x + 4",
   "-3*x^2 - 10*x + 3"
  ],
  "answer": "A",
  "explain": "Har term par power rule lagao aur constant ka derivative 0 hota hai."
 },
 {
  "n": 155,
  "topic": "deriv-basic",
  "q": "d/dx ((3*x + 4)^2) = ?",
  "options": [
   "9*x + 12",
   "54*x + 72",
   "6*x + 8",
   "18*x + 24"
  ],
  "answer": "D",
  "explain": "Chain rule: bahar wala derivative lo, phir andar wale ka derivative (3) se multiply karo."
 },
 {
  "n": 156,
  "topic": "deriv-basic",
  "q": "d/dx (sqrt(3*x + 5)) = ?",
  "options": [
   "1/(2*sqrt(3*x + 5))",
   "-3/(2*sqrt(3*x + 5))",
   "3/(2*sqrt(3*x + 5))",
   "3/sqrt(3*x + 5)"
  ],
  "answer": "C",
  "explain": "Chain rule: sqrt ka derivative 1/(2*sqrt(...)) aur andar ka derivative 3 hai."
 },
 {
  "n": 157,
  "topic": "deriv-basic",
  "q": "f(x) = -2*x^3 - 2*x^2 - 6*x - 5 ho to f''(x) = ?",
  "options": [
   "2 - 4*(3*x + 1)",
   "4*(3*x + 1)",
   "-4*(3*x + 1)",
   "-6*x^2 - 4*x - 6"
  ],
  "answer": "C",
  "explain": "Pehle f'(x) nikalo, phir uska dobara derivative lo."
 },
 {
  "n": 158,
  "topic": "deriv-basic",
  "q": "f(x) = 2*x^2 - 5*x + 2 ka x = 2 par slope (f'(2)) kya hai?",
  "options": [
   "3",
   "2",
   "4",
   "-3"
  ],
  "answer": "A",
  "explain": "Pehle f'(x) nikalo, phir x = 2 daal do."
 },
 {
  "n": 159,
  "topic": "deriv-basic",
  "q": "d/dx (3*x^3) = ?",
  "options": [
   "9*x^4",
   "9*x^2",
   "3*x^4",
   "4*x^3"
  ],
  "answer": "B",
  "explain": "Power rule: d/dx (x^n) = n*x^(n-1) hota hai."
 },
 {
  "n": 160,
  "topic": "deriv-basic",
  "q": "d/dx (-x^3 + x^2 - 4*x + 6) = ?",
  "options": [
   "3*x^2 - 2*x + 4",
   "-3*x^2 + 3*x - 4",
   "-3*x^2 + 2*x - 3",
   "-3*x^2 + 2*x - 4"
  ],
  "answer": "D",
  "explain": "Har term par power rule lagao aur constant ka derivative 0 hota hai."
 },
 {
  "n": 161,
  "topic": "deriv-basic",
  "q": "d/dx ((4*x + 4)^4) = ?",
  "options": [
   "4*(4*x + 4)^3",
   "16*(4*x + 4)^3",
   "16*(4*x + 4)^4",
   "64*(4*x + 4)^3"
  ],
  "answer": "B",
  "explain": "Chain rule: bahar wala derivative lo, phir andar wale ka derivative (4) se multiply karo."
 },
 {
  "n": 162,
  "topic": "deriv-basic",
  "q": "d/dx (sqrt(x^2 + 1)) = ?",
  "options": [
   "1/sqrt(x^2 + 1)",
   "-x/sqrt(x^2 + 1)",
   "x/sqrt(x^2 + 1)",
   "2*x/sqrt(x^2 + 1)"
  ],
  "answer": "C",
  "explain": "Chain rule: sqrt ka derivative 1/(2*sqrt(...)) aur andar (x^2 + 1) ka derivative 2x hai."
 },
 {
  "n": 163,
  "topic": "deriv-basic",
  "q": "f(x) = -x^3 + 3*x^2 + 4*x + 4 ho to f''(x) = ?",
  "options": [
   "6*(1 - x)",
   "6*(1 - x) + 2",
   "-3*x^2 + 6*x + 4",
   "-6*(1 - x)"
  ],
  "answer": "A",
  "explain": "Pehle f'(x) nikalo, phir uska dobara derivative lo."
 },
 {
  "n": 164,
  "topic": "deriv-basic",
  "q": "f(x) = 5*x^2 - 4*x - 3 ka x = -2 par slope (f'(-2)) kya hai?",
  "options": [
   "-23",
   "24",
   "-25",
   "-24"
  ],
  "answer": "D",
  "explain": "Pehle f'(x) nikalo, phir x = -2 daal do."
 },
 {
  "n": 165,
  "topic": "deriv-basic",
  "q": "d/dx (3*x^-3) = ?",
  "options": [
   "3/x^4",
   "-9/x^4",
   "-3/x^4",
   "-3/x^2"
  ],
  "answer": "B",
  "explain": "Power rule: d/dx (x^n) = n*x^(n-1) hota hai."
 },
 {
  "n": 166,
  "topic": "product-quotient",
  "q": "d/dx ((3*x^2 + 5)*(4*x - 1)) = ?",
  "options": [
   "24*x^2 - 6*x",
   "24*x",
   "36*x^2 - 6*x + 20",
   "12*x^2 + 20"
  ],
  "answer": "C",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 167,
  "topic": "product-quotient",
  "q": "d/dx ((x^2)*(5*x^2 - 3*x - 6)) = ?",
  "options": [
   "-3*x^2 - 12*x",
   "20*x^2 - 6*x",
   "10*x^3 - 6*x^2 - 12*x",
   "20*x^3 - 9*x^2 - 12*x"
  ],
  "answer": "D",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 168,
  "topic": "product-quotient",
  "q": "d/dx ((3*x^2 + 6*x + 5)/(-2*x - 2)) = ?",
  "options": [
   "(-3*x^2 - 6*x - 1)/(2*(x^2 + 2*x + 1))",
   "-3*x - 3",
   "(3*x^2 + 6*x + 1)/(x + 1)",
   "(-9*x^2 - 18*x - 11)/(2*(x^2 + 2*x + 1))"
  ],
  "answer": "A",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 169,
  "topic": "product-quotient",
  "q": "d/dx ((x^2 - 1)/(x + 1)) = ?",
  "options": [
   "x + 1",
   "2*x",
   "1",
   "(3*x - 1)/(x + 1)"
  ],
  "answer": "C",
  "explain": "Quotient rule lagao: (u'*v - u*v')/v^2, phir simplify karo."
 },
 {
  "n": 170,
  "topic": "product-quotient",
  "q": "f(x) = (5*x^2 - 6*x + 3)*(3*x - 3) ho to f'(0) = ?",
  "options": [
   "26",
   "28",
   "-27",
   "27"
  ],
  "answer": "D",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = 0 daal do."
 },
 {
  "n": 171,
  "topic": "product-quotient",
  "q": "d/dx ((2*x^2 - 3*x - 5)*(-3*x - 4)) = ?",
  "options": [
   "-6*x^2 + 9*x + 15",
   "-18*x^2 + 2*x + 27",
   "9 - 12*x",
   "-12*x^2 - 7*x + 12"
  ],
  "answer": "B",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 172,
  "topic": "product-quotient",
  "q": "d/dx ((x^2)*(-x^2 + 4*x - 2)) = ?",
  "options": [
   "-4*x^3 + 12*x^2 - 4*x",
   "-2*x^3 + 8*x^2 - 4*x",
   "4*x^2 - 4*x",
   "-4*x^2 + 8*x"
  ],
  "answer": "A",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 173,
  "topic": "product-quotient",
  "q": "d/dx ((-x^2 - 5)/(2*x + 4)) = ?",
  "options": [
   "-x",
   "(-x^2 - 4*x + 5)/(x + 2)",
   "(-x^2 - 2*x*(x + 2) - 5)/(2*(x + 2)^2)",
   "(x^2 - 2*x*(x + 2) + 5)/(2*(x + 2)^2)"
  ],
  "answer": "D",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 174,
  "topic": "product-quotient",
  "q": "d/dx ((x^2 + 1)/(x - 1)) = ?",
  "options": [
   "2*x",
   "(-x^2 + 2*x*(x - 1) - 1)/(x - 1)^2",
   "(x^2 - 2*x - 1)/(x - 1)",
   "(x^2 + 2*x*(x - 1) + 1)/(x - 1)^2"
  ],
  "answer": "B",
  "explain": "Quotient rule lagao: (u'*v - u*v')/v^2, phir simplify karo."
 },
 {
  "n": 175,
  "topic": "product-quotient",
  "q": "f(x) = (x^2 - 5*x - 3)/(x + 3) ho to f'(3) = ?",
  "options": [
   "17/12",
   "-5/12",
   "5/12",
   "-7/12"
  ],
  "answer": "C",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = 3 daal do."
 },
 {
  "n": 176,
  "topic": "product-quotient",
  "q": "d/dx ((2*x^2 - 6*x - 3)*(x - 2)) = ?",
  "options": [
   "6*x^2 - 20*x + 9",
   "4*x - 6",
   "2*x^2 - 8*x + 15",
   "4*x^2 - 14*x + 12"
  ],
  "answer": "A",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 177,
  "topic": "product-quotient",
  "q": "d/dx ((x^3)*(-4*x^2 - 6*x + 4)) = ?",
  "options": [
   "-20*x^4 - 24*x^3 + 12*x^2",
   "-24*x^3 - 18*x^2",
   "-4*x^4 - 12*x^3 + 12*x^2",
   "-12*x^4 - 18*x^3 + 12*x^2"
  ],
  "answer": "A",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 178,
  "topic": "product-quotient",
  "q": "d/dx ((-3*x^2 - 3*x + 1)/(-3*x - 5)) = ?",
  "options": [
   "3*(-3*x^2 - 10*x - 6)/(3*x + 5)",
   "2*x + 1",
   "3*(3*x^2 + 10*x + 6)/(9*x^2 + 30*x + 25)",
   "3*(9*x^2 + 16*x + 4)/(9*x^2 + 30*x + 25)"
  ],
  "answer": "C",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 179,
  "topic": "product-quotient",
  "q": "f(x) = (3*x^2 - 4)/(2*x + 2) ho to f'(0) = ?",
  "options": [
   "1",
   "-2",
   "3",
   "2"
  ],
  "answer": "D",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = 0 daal do."
 },
 {
  "n": 180,
  "topic": "product-quotient",
  "q": "d/dx ((2 - x^2)*(2*x + 5)) = ?",
  "options": [
   "-4*x^2 - 10*x",
   "-6*x^2 - 10*x + 4",
   "-4*x",
   "4 - 2*x^2"
  ],
  "answer": "B",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 181,
  "topic": "product-quotient",
  "q": "d/dx ((x^3)*(-4*x^2 - x - 4)) = ?",
  "options": [
   "-20*x^4 - 4*x^3 - 12*x^2",
   "-24*x^3 - 3*x^2",
   "-12*x^4 - 3*x^3 - 12*x^2",
   "-4*x^4 - 2*x^3 - 12*x^2"
  ],
  "answer": "A",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 182,
  "topic": "product-quotient",
  "q": "d/dx ((2*x^2 + 4*x - 6)/(-4*x - 5)) = ?",
  "options": [
   "-x - 1",
   "4*(-2*x^2 - 5*x - 11)/(16*x^2 + 40*x + 25)",
   "4*(-6*x^2 - 13*x + 1)/(16*x^2 + 40*x + 25)",
   "4*(2*x^2 + 5*x + 11)/(4*x + 5)"
  ],
  "answer": "B",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 183,
  "topic": "product-quotient",
  "q": "f(x) = (-5*x^2 + 3*x - 4)/(4 - 2*x) ho to f'(-2) = ?",
  "options": [
   "47/16",
   "15/16",
   "-31/16",
   "31/16"
  ],
  "answer": "D",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = -2 daal do."
 },
 {
  "n": 184,
  "topic": "product-quotient",
  "q": "d/dx ((2*x^2 - 2*x + 2)*(4*x - 4)) = ?",
  "options": [
   "16*x - 8",
   "8*x^2 - 8*x + 8",
   "24*x^2 - 32*x + 16",
   "8*x^2 - 16*x"
  ],
  "answer": "C",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 185,
  "topic": "product-quotient",
  "q": "d/dx ((x^3)*(-x^2 + 6*x + 1)) = ?",
  "options": [
   "-3*x^4 + 18*x^3 + 3*x^2",
   "-5*x^4 + 24*x^3 + 3*x^2",
   "-6*x^3 + 18*x^2",
   "-x^4 + 12*x^3 + 3*x^2"
  ],
  "answer": "B",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 186,
  "topic": "product-quotient",
  "q": "d/dx ((2*x^2 - 5*x + 2)/(3 - x)) = ?",
  "options": [
   "(2*x^2 - 12*x + 13)/(x - 3)",
   "(-6*x^2 + 22*x - 17)/(x^2 - 6*x + 9)",
   "5 - 4*x",
   "(-2*x^2 + 12*x - 13)/(x^2 - 6*x + 9)"
  ],
  "answer": "D",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 187,
  "topic": "product-quotient",
  "q": "d/dx (x/(x^2 + 1)) = ?",
  "options": [
   "(1 - x^2)/(x^4 + 2*x^2 + 1)",
   "(3*x^2 + 1)/(x^2 + 1)^2",
   "1/(2*x)",
   "(1 - x^2)/(x^2 + 1)"
  ],
  "answer": "A",
  "explain": "Quotient rule lagao: (u'*v - u*v')/v^2, phir simplify karo."
 },
 {
  "n": 188,
  "topic": "product-quotient",
  "q": "f(x) = (2*x^2 - 6*x - 5)/(3*x + 4) ho to f'(3) = ?",
  "options": [
   "-76/169",
   "262/169",
   "93/169",
   "-93/169"
  ],
  "answer": "C",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = 3 daal do."
 },
 {
  "n": 189,
  "topic": "product-quotient",
  "q": "d/dx ((-2*x^2 - 6*x - 4)*(3*x - 3)) = ?",
  "options": [
   "-18*x^2 - 24*x + 6",
   "-6*x^2 - 18*x - 12",
   "-12*x^2 - 6*x + 18",
   "-6*x^2 + 12*x + 30"
  ],
  "answer": "A",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 190,
  "topic": "product-quotient",
  "q": "d/dx ((x^2)*(-2*x^2 + x - 5)) = ?",
  "options": [
   "-8*x^2 + 2*x",
   "-4*x^3 + 2*x^2 - 10*x",
   "-8*x^3 + 3*x^2 - 10*x",
   "x^2 - 10*x"
  ],
  "answer": "C",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 191,
  "topic": "product-quotient",
  "q": "d/dx ((5*x^2 + x + 1)/(4 - x)) = ?",
  "options": [
   "-10*x - 1",
   "5*(x^2 - 8*x - 1)/(x - 4)",
   "(-15*x^2 + 38*x + 3)/(x^2 - 8*x + 16)",
   "5*(-x^2 + 8*x + 1)/(x^2 - 8*x + 16)"
  ],
  "answer": "D",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 192,
  "topic": "product-quotient",
  "q": "f(x) = (-2*x^2 + 2*x + 1)*(3*x + 3) ho to f'(0) = ?",
  "options": [
   "-9",
   "9",
   "10",
   "8"
  ],
  "answer": "B",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = 0 daal do."
 },
 {
  "n": 193,
  "topic": "product-quotient",
  "q": "d/dx ((4*x^2 + x + 2)*(-x)) = ?",
  "options": [
   "2 - 4*x^2",
   "-4*x^2 - x - 2",
   "-12*x^2 - 2*x - 2",
   "-8*x^2 - x"
  ],
  "answer": "C",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 194,
  "topic": "product-quotient",
  "q": "d/dx ((x^3)*(-2*x^2 + x - 6)) = ?",
  "options": [
   "-10*x^4 + 4*x^3 - 18*x^2",
   "-6*x^4 + 3*x^3 - 18*x^2",
   "-12*x^3 + 3*x^2",
   "-2*x^4 + 2*x^3 - 18*x^2"
  ],
  "answer": "A",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 195,
  "topic": "product-quotient",
  "q": "d/dx ((3*x^2 - 5*x + 6)/(-4*x - 5)) = ?",
  "options": [
   "5/4 - 3*x/2",
   "(-12*x^2 - 30*x + 49)/(16*x^2 + 40*x + 25)",
   "(12*x^2 + 30*x - 49)/(4*x + 5)",
   "(-36*x^2 + 10*x + 1)/(16*x^2 + 40*x + 25)"
  ],
  "answer": "B",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 196,
  "topic": "product-quotient",
  "q": "d/dx ((x^2 + 1)/(x - 3)) = ?",
  "options": [
   "2*x",
   "(x^2 + 2*x*(x - 3) + 1)/(x - 3)^2",
   "(x^2 - 6*x - 1)/(x - 3)",
   "(-x^2 + 2*x*(x - 3) - 1)/(x - 3)^2"
  ],
  "answer": "D",
  "explain": "Quotient rule lagao: (u'*v - u*v')/v^2, phir simplify karo."
 },
 {
  "n": 197,
  "topic": "product-quotient",
  "q": "f(x) = (-x^2 - x + 1)*(-2*x - 2) ho to f'(3) = ?",
  "options": [
   "78",
   "-78",
   "77",
   "79"
  ],
  "answer": "A",
  "explain": "Pehle derivative nikalo (product ya quotient rule se), phir x = 3 daal do."
 },
 {
  "n": 198,
  "topic": "product-quotient",
  "q": "d/dx ((-5*x^2 + 5*x - 2)*(2*x + 4)) = ?",
  "options": [
   "-10*x^2 - 40*x + 24",
   "10 - 20*x",
   "-10*x^2 + 10*x - 4",
   "-30*x^2 - 20*x + 16"
  ],
  "answer": "D",
  "explain": "Product rule: (u*v)' = u'*v + u*v' hota hai."
 },
 {
  "n": 199,
  "topic": "product-quotient",
  "q": "d/dx ((x^2)*(5*x^2 + 2*x - 5)) = ?",
  "options": [
   "20*x^2 + 4*x",
   "20*x^3 + 6*x^2 - 10*x",
   "10*x^3 + 4*x^2 - 10*x",
   "2*x^2 - 10*x"
  ],
  "answer": "B",
  "explain": "Product rule: pehle wale ka derivative dusre se, plus pehla dusre ke derivative se."
 },
 {
  "n": 200,
  "topic": "product-quotient",
  "q": "d/dx ((3*x^2 - 3*x - 1)/(-x - 2)) = ?",
  "options": [
   "(-9*x^2 - 6*x + 7)/(x^2 + 4*x + 4)",
   "(3*x^2 + 12*x - 5)/(x + 2)",
   "(-3*x^2 - 12*x + 5)/(x^2 + 4*x + 4)",
   "3 - 6*x"
  ],
  "answer": "C",
  "explain": "Quotient rule: (u/v)' = (u'*v - u*v')/v^2 hota hai, denominator ka square lagta hai."
 },
 {
  "n": 201,
  "topic": "trig",
  "q": "d/dx (tan(x)^3) = ?",
  "options": [
   "3*tan(x)^2",
   "(3*tan(x)^2 + 3)*tan(x)^2",
   "-(3*tan(x)^2 + 3)*tan(x)^2",
   "3*tan(x)^3"
  ],
  "answer": "B",
  "explain": "Pehle power rule, phir tan ka derivative (chain rule)."
 },
 {
  "n": 202,
  "topic": "trig",
  "q": "d/dx (cos(1/x)) = ?",
  "options": [
   "-sin(1/x)/x^2",
   "1 + sin(1/x)/x^2",
   "sin(1/x)/x^2",
   "sin(1/x)/(2*x^2)"
  ],
  "answer": "C",
  "explain": "Chain rule: -sin(1/x) ko 1/x ke derivative (-1/x^2) se multiply karo."
 },
 {
  "n": 203,
  "topic": "trig",
  "q": "d/dx (sin(x)/x) = ?",
  "options": [
   "x*cos(x) + sin(x)",
   "(-x*cos(x) + sin(x))/x^2",
   "sin(x)",
   "(x*cos(x) - sin(x))/x^2"
  ],
  "answer": "D",
  "explain": "Product ya quotient rule lagao, aur trig derivatives sahi yaad rakho."
 },
 {
  "n": 204,
  "topic": "trig",
  "q": "f(x) = sin(x) + cos(x) ho to f'(0) = ?",
  "options": [
   "1",
   "-1",
   "2",
   "0"
  ],
  "answer": "A",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 205,
  "topic": "trig",
  "q": "d/dx (sin(x^2)) = ?",
  "options": [
   "2*x*cos(x^2) + 1",
   "2*x*cos(x^2)",
   "-2*x*cos(x^2)",
   "0"
  ],
  "answer": "B",
  "explain": "Chain rule: cos(x^2) ko andar x^2 ke derivative 2x se multiply karo."
 },
 {
  "n": 206,
  "topic": "trig",
  "q": "d/dx (cos(x)/x) = ?",
  "options": [
   "x*cos(x) + sin(x)",
   "(x*sin(x) + cos(x))/x^2",
   "sin(x)",
   "-(x*sin(x) + cos(x))/x^2"
  ],
  "answer": "D",
  "explain": "Product ya quotient rule lagao, aur trig derivatives sahi yaad rakho."
 },
 {
  "n": 207,
  "topic": "trig",
  "q": "d/dx (cos(x)^2) = ?",
  "options": [
   "2*sin(x)*cos(x)",
   "2*cos(x)^2",
   "-2*sin(x)*cos(x)",
   "2*cos(x)"
  ],
  "answer": "C",
  "explain": "Pehle power rule, phir cos ka derivative (chain rule)."
 },
 {
  "n": 208,
  "topic": "trig",
  "q": "d/dx (tan(2*x + 1)) = ?",
  "options": [
   "2*tan(2*x + 1)^2 + 2",
   "2*tan(2*x + 1)^2 + 3",
   "-2*tan(2*x + 1)^2 - 2",
   "tan(2*x + 1)^2 + 1"
  ],
  "answer": "A",
  "explain": "Chain rule: sec^2(2*x + 1) ko andar ke derivative 2 se multiply karo."
 },
 {
  "n": 209,
  "topic": "trig",
  "q": "d/dx (tan(3*x + 1)) = ?",
  "options": [
   "3*tan(3*x + 1)^2 + 4",
   "-3*tan(3*x + 1)^2 - 3",
   "3*tan(3*x + 1)^2/2 + 3/2",
   "3*tan(3*x + 1)^2 + 3"
  ],
  "answer": "D",
  "explain": "Chain rule: sec^2(3*x + 1) ko andar ke derivative 3 se multiply karo."
 },
 {
  "n": 210,
  "topic": "trig",
  "q": "d/dx (sin(x)*cos(x)) = ?",
  "options": [
   "cos(2*x)",
   "sin(x)",
   "x*cos(x) + sin(x)",
   "-cos(2*x)"
  ],
  "answer": "A",
  "explain": "Product ya quotient rule lagao, aur trig derivatives sahi yaad rakho."
 },
 {
  "n": 211,
  "topic": "trig",
  "q": "f(x) = tan(x) ho to f'(0) = ?",
  "options": [
   "0",
   "1",
   "2",
   "-1"
  ],
  "answer": "B",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 212,
  "topic": "trig",
  "q": "d/dx (sin(x)^2) = ?",
  "options": [
   "2*sin(x)^2",
   "2*sin(x)",
   "2*sin(x)*cos(x)",
   "-2*sin(x)*cos(x)"
  ],
  "answer": "C",
  "explain": "Pehle power rule, phir sin ka derivative (chain rule)."
 },
 {
  "n": 213,
  "topic": "trig",
  "q": "d/dx (cos(x^3)) = ?",
  "options": [
   "-3*x^2*sin(x^3)",
   "-3*x^2*sin(x^3) + 1",
   "3*x^2*sin(x^3)",
   "-3*x^2*sin(x^3)/2"
  ],
  "answer": "A",
  "explain": "Chain rule: -sin(x^3) ko andar x^3 ke derivative 3x^2 se multiply karo."
 },
 {
  "n": 214,
  "topic": "trig",
  "q": "f(x) = sin(2x) ho to f'(pi/4) = ?",
  "options": [
   "-1",
   "0",
   "1",
   "2"
  ],
  "answer": "B",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 215,
  "topic": "trig",
  "q": "d/dx (x^2*cos(x)) = ?",
  "options": [
   "sin(x)",
   "x*cos(x) + sin(x)",
   "x*(-x*sin(x) + 2*cos(x))",
   "x*(x*sin(x) - 2*cos(x))"
  ],
  "answer": "C",
  "explain": "Product ya quotient rule lagao, aur trig derivatives sahi yaad rakho."
 },
 {
  "n": 216,
  "topic": "trig",
  "q": "d/dx (cos(x)^3) = ?",
  "options": [
   "3*sin(x)*cos(x)^2",
   "3*cos(x)^2",
   "3*cos(x)^3",
   "-3*sin(x)*cos(x)^2"
  ],
  "answer": "D",
  "explain": "Pehle power rule, phir cos ka derivative (chain rule)."
 },
 {
  "n": 217,
  "topic": "trig",
  "q": "f(x) = x*sin(x) ho to f'(0) = ?",
  "options": [
   "0",
   "2",
   "-1",
   "1"
  ],
  "answer": "A",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 218,
  "topic": "trig",
  "q": "d/dx (tan(x)^2) = ?",
  "options": [
   "2*tan(x)^2",
   "(2*tan(x)^2 + 2)*tan(x)",
   "-(2*tan(x)^2 + 2)*tan(x)",
   "2*tan(x)"
  ],
  "answer": "B",
  "explain": "Pehle power rule, phir tan ka derivative (chain rule)."
 },
 {
  "n": 219,
  "topic": "trig",
  "q": "d/dx (sin(sqrt(x))) = ?",
  "options": [
   "cos(sqrt(x))/(4*sqrt(x))",
   "1 + cos(sqrt(x))/(2*sqrt(x))",
   "cos(sqrt(x))/(2*sqrt(x))",
   "-cos(sqrt(x))/(2*sqrt(x))"
  ],
  "answer": "C",
  "explain": "Chain rule: cos(sqrt(x)) ko sqrt(x) ke derivative 1/(2*sqrt(x)) se multiply karo."
 },
 {
  "n": 220,
  "topic": "trig",
  "q": "d/dx (sin(x)^3) = ?",
  "options": [
   "-3*sin(x)^2*cos(x)",
   "3*sin(x)^2",
   "3*sin(x)^3",
   "3*sin(x)^2*cos(x)"
  ],
  "answer": "D",
  "explain": "Pehle power rule, phir sin ka derivative (chain rule)."
 },
 {
  "n": 221,
  "topic": "trig",
  "q": "d/dx (tan(3*x + 4)) = ?",
  "options": [
   "3*tan(3*x + 4)^2 + 3",
   "-3*tan(3*x + 4)^2 - 3",
   "3*tan(3*x + 4)^2/2 + 3/2",
   "3*tan(3*x + 4)^2 + 4"
  ],
  "answer": "A",
  "explain": "Chain rule: sec^2(3*x + 4) ko andar ke derivative 3 se multiply karo."
 },
 {
  "n": 222,
  "topic": "trig",
  "q": "d/dx (x*sin(x)) = ?",
  "options": [
   "-x*cos(x) - sin(x)",
   "sin(x)",
   "x*(-x*sin(x) + 2*cos(x))",
   "x*cos(x) + sin(x)"
  ],
  "answer": "D",
  "explain": "Product ya quotient rule lagao, aur trig derivatives sahi yaad rakho."
 },
 {
  "n": 223,
  "topic": "trig",
  "q": "d/dx (tan(4*x)) = ?",
  "options": [
   "-4*tan(4*x)^2 - 4",
   "4*tan(4*x)^2 + 4",
   "tan(x)^2 + 1",
   "tan(4*x)^2 + 1"
  ],
  "answer": "B",
  "explain": "Chain rule: tan ka derivative lo, phir andar 4*x ka derivative (4) se multiply karo."
 },
 {
  "n": 224,
  "topic": "trig",
  "q": "d/dx (sin(2*x)) = ?",
  "options": [
   "cos(x)",
   "cos(2*x)",
   "2*cos(2*x)",
   "-2*cos(2*x)"
  ],
  "answer": "C",
  "explain": "Chain rule: sin ka derivative lo, phir andar 2*x ka derivative (2) se multiply karo."
 },
 {
  "n": 225,
  "topic": "trig",
  "q": "d/dx (tan(2*x + 3)) = ?",
  "options": [
   "2*tan(2*x + 3)^2 + 2",
   "tan(2*x + 3)^2 + 1",
   "2*tan(2*x + 3)^2 + 3",
   "-2*tan(2*x + 3)^2 - 2"
  ],
  "answer": "A",
  "explain": "Chain rule: sec^2(2*x + 3) ko andar ke derivative 2 se multiply karo."
 },
 {
  "n": 226,
  "topic": "trig",
  "q": "d/dx (tan(2*x)) = ?",
  "options": [
   "-2*tan(2*x)^2 - 2",
   "2*tan(2*x)^2 + 2",
   "tan(x)^2 + 1",
   "tan(2*x)^2 + 1"
  ],
  "answer": "B",
  "explain": "Chain rule: tan ka derivative lo, phir andar 2*x ka derivative (2) se multiply karo."
 },
 {
  "n": 227,
  "topic": "trig",
  "q": "d/dx (tan(3*x + 3)) = ?",
  "options": [
   "3*tan(3*x + 3)^2 + 4",
   "3/(2*cos(3*x + 3)^2)",
   "3/cos(3*x + 3)^2",
   "-3/cos(3*x + 3)^2"
  ],
  "answer": "C",
  "explain": "Chain rule: sec^2(3*x + 3) ko andar ke derivative 3 se multiply karo."
 },
 {
  "n": 228,
  "topic": "trig",
  "q": "d/dx (tan(2*x + 4)) = ?",
  "options": [
   "-2/cos(2*x + 4)^2",
   "2*tan(2*x + 4)^2 + 3",
   "cos(2*x + 4)^(-2)",
   "2/cos(2*x + 4)^2"
  ],
  "answer": "D",
  "explain": "Chain rule: sec^2(2*x + 4) ko andar ke derivative 2 se multiply karo."
 },
 {
  "n": 229,
  "topic": "trig",
  "q": "d/dx (sin(3*x)) = ?",
  "options": [
   "cos(3*x)",
   "3*cos(3*x)",
   "cos(x)",
   "-3*cos(3*x)"
  ],
  "answer": "B",
  "explain": "Chain rule: sin ka derivative lo, phir andar 3*x ka derivative (3) se multiply karo."
 },
 {
  "n": 230,
  "topic": "trig",
  "q": "d/dx (sin(4*x)) = ?",
  "options": [
   "cos(x)",
   "-4*cos(4*x)",
   "cos(4*x)",
   "4*cos(4*x)"
  ],
  "answer": "D",
  "explain": "Chain rule: sin ka derivative lo, phir andar 4*x ka derivative (4) se multiply karo."
 },
 {
  "n": 231,
  "topic": "trig",
  "q": "d/dx (tan(3*x)) = ?",
  "options": [
   "3*tan(3*x)^2 + 3",
   "-3*tan(3*x)^2 - 3",
   "tan(x)^2 + 1",
   "tan(3*x)^2 + 1"
  ],
  "answer": "A",
  "explain": "Chain rule: tan ka derivative lo, phir andar 3*x ka derivative (3) se multiply karo."
 },
 {
  "n": 232,
  "topic": "trig",
  "q": "d/dx (cos(4*x)) = ?",
  "options": [
   "-sin(4*x)",
   "-sin(x)",
   "-4*sin(4*x)",
   "4*sin(4*x)"
  ],
  "answer": "C",
  "explain": "Chain rule: cos ka derivative lo, phir andar 4*x ka derivative (4) se multiply karo."
 },
 {
  "n": 233,
  "topic": "trig",
  "q": "d/dx (tan(2*x + 2)) = ?",
  "options": [
   "cos(2*x + 2)^(-2)",
   "2/cos(2*x + 2)^2",
   "2*tan(2*x + 2)^2 + 3",
   "-2/cos(2*x + 2)^2"
  ],
  "answer": "B",
  "explain": "Chain rule: sec^2(2*x + 2) ko andar ke derivative 2 se multiply karo."
 },
 {
  "n": 234,
  "topic": "trig",
  "q": "d/dx (tan(3*x + 2)) = ?",
  "options": [
   "3*tan(3*x + 2)^2 + 4",
   "-3*tan(3*x + 2)^2 - 3",
   "3*tan(3*x + 2)^2 + 3",
   "3*tan(3*x + 2)^2/2 + 3/2"
  ],
  "answer": "C",
  "explain": "Chain rule: sec^2(3*x + 2) ko andar ke derivative 3 se multiply karo."
 },
 {
  "n": 235,
  "topic": "trig",
  "q": "d/dx (cos(2*x)) = ?",
  "options": [
   "-2*sin(2*x)",
   "-sin(x)",
   "2*sin(2*x)",
   "-sin(2*x)"
  ],
  "answer": "A",
  "explain": "Chain rule: cos ka derivative lo, phir andar 2*x ka derivative (2) se multiply karo."
 },
 {
  "n": 236,
  "topic": "log-exp",
  "q": "d/dx (ln(x)) = ?",
  "options": [
   "x",
   "2/x",
   "-1/x",
   "1/x"
  ],
  "answer": "D",
  "explain": "ln(x) ka derivative 1/x hota hai."
 },
 {
  "n": 237,
  "topic": "log-exp",
  "q": "d/dx (ln(3*x + 5)) = ?",
  "options": [
   "3/(3*x + 5)",
   "3/(2*(3*x + 5))",
   "1/x",
   "-3/(3*x + 5)"
  ],
  "answer": "A",
  "explain": "Chain rule: 1/(3*x + 5) ko andar ke derivative 3 se multiply karo."
 },
 {
  "n": 238,
  "topic": "log-exp",
  "q": "d/dx (e^(4*x)) = ?",
  "options": [
   "2*e^(4*x)",
   "4*e^(4*x)",
   "-4*e^(4*x)",
   "e^(x)"
  ],
  "answer": "B",
  "explain": "Chain rule: e^(4*x) ko andar ke derivative 4 se multiply karo."
 },
 {
  "n": 239,
  "topic": "log-exp",
  "q": "d/dx (e^(sin(x))) = ?",
  "options": [
   "-e^(sin(x))*cos(x)",
   "e^x",
   "e^(sin(x))",
   "e^(sin(x))*cos(x)"
  ],
  "answer": "D",
  "explain": "Chain rule: e^(sin(x)) ko sin(x) ke derivative cos(x) se multiply karo."
 },
 {
  "n": 240,
  "topic": "log-exp",
  "q": "d/dx (x*ln(x)) = ?",
  "options": [
   "(x + 1)*e^(x)",
   "ln(x)",
   "ln(x) + 1",
   "-ln(x) - 1"
  ],
  "answer": "C",
  "explain": "Product rule: (x)'*ln(x) + x*(ln(x))' = ln(x) + 1."
 },
 {
  "n": 241,
  "topic": "log-exp",
  "q": "f(x) = x*ln(x) ho to f'(1) = ?",
  "options": [
   "2",
   "0",
   "1",
   "-1"
  ],
  "answer": "C",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 242,
  "topic": "log-exp",
  "q": "d/dx (ln(6*x)) = ?",
  "options": [
   "1/x",
   "2/x",
   "x",
   "-1/x"
  ],
  "answer": "A",
  "explain": "ln(6*x) ka derivative 1/x hota hai (constant 6 cancel ho jata hai)."
 },
 {
  "n": 243,
  "topic": "log-exp",
  "q": "d/dx (ln(sqrt(x))) = ?",
  "options": [
   "1/(4*x)",
   "1/(2*x)",
   "-1/(2*x)",
   "1/x"
  ],
  "answer": "B",
  "explain": "ln(sqrt(x)) = (1/2)*ln(x), is liye derivative 1/(2x) hota hai."
 },
 {
  "n": 244,
  "topic": "log-exp",
  "q": "d/dx (e^(x^2)) = ?",
  "options": [
   "e^(x)",
   "-2*x*e^(x^2)",
   "x*e^(x^2)",
   "2*x*e^(x^2)"
  ],
  "answer": "D",
  "explain": "Chain rule: e^(x^2) ko andar x^2 ke derivative 2x se multiply karo."
 },
 {
  "n": 245,
  "topic": "log-exp",
  "q": "d/dx (e^(3*x^2 - x + 1)) = ?",
  "options": [
   "(1 - 6*x)*e^(3*x^2 - x + 1)",
   "e^x",
   "(6*x - 1)*e^(3*x^2 - x + 1)",
   "e^(3*x^2 - x + 1)"
  ],
  "answer": "C",
  "explain": "Chain rule: e^(...) ko andar wale expression ke derivative se multiply karo."
 },
 {
  "n": 246,
  "topic": "log-exp",
  "q": "d/dx (x^2*e^x) = ?",
  "options": [
   "x*(x + 2)*e^(x)",
   "ln(x) + 1",
   "ln(x)",
   "x*(-x - 2)*e^(x)"
  ],
  "answer": "A",
  "explain": "Product rule: 2x*e^x + x^2*e^x = e^x*(x^2 + 2x)."
 },
 {
  "n": 247,
  "topic": "log-exp",
  "q": "f(x) = ln(x^2 + 1) ho to f'(1) = ?",
  "options": [
   "-1",
   "1",
   "0",
   "2"
  ],
  "answer": "B",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 248,
  "topic": "log-exp",
  "q": "d/dx (ln(5*x)) = ?",
  "options": [
   "x",
   "2/x",
   "-1/x",
   "1/x"
  ],
  "answer": "D",
  "explain": "ln(5*x) ka derivative 1/x hota hai (constant 5 cancel ho jata hai)."
 },
 {
  "n": 249,
  "topic": "log-exp",
  "q": "d/dx (ln(sin(x))) = ?",
  "options": [
   "1/tan(x)",
   "1/(2*tan(x))",
   "1/x",
   "-1/tan(x)"
  ],
  "answer": "A",
  "explain": "Chain rule: 1/sin(x) ko sin(x) ke derivative cos(x) se multiply karo."
 },
 {
  "n": 250,
  "topic": "log-exp",
  "q": "d/dx (e^(5*x)) = ?",
  "options": [
   "-5*e^(5*x)",
   "e^(x)",
   "5*e^(5*x)",
   "5*e^(5*x)/2"
  ],
  "answer": "C",
  "explain": "Chain rule: e^(5*x) ko andar ke derivative 5 se multiply karo."
 },
 {
  "n": 251,
  "topic": "log-exp",
  "q": "d/dx (e^(sqrt(x))) = ?",
  "options": [
   "e^x",
   "e^(sqrt(x))",
   "-e^(sqrt(x))/(2*sqrt(x))",
   "e^(sqrt(x))/(2*sqrt(x))"
  ],
  "answer": "D",
  "explain": "Chain rule: e^(sqrt(x)) ko sqrt(x) ke derivative 1/(2*sqrt(x)) se multiply karo."
 },
 {
  "n": 252,
  "topic": "log-exp",
  "q": "d/dx (ln(x)/x) = ?",
  "options": [
   "ln(x)",
   "(1 - ln(x))/x^2",
   "ln(x) + 1",
   "(ln(x) - 1)/x^2"
  ],
  "answer": "B",
  "explain": "Quotient rule: ((1/x)*x - ln(x)*1)/x^2 = (1 - ln(x))/x^2."
 },
 {
  "n": 253,
  "topic": "log-exp",
  "q": "f(x) = e^(2x) ho to f'(0) = ?",
  "options": [
   "2",
   "3",
   "-2",
   "1"
  ],
  "answer": "A",
  "explain": "Pehle derivative nikalo, phir di gayi value daal do."
 },
 {
  "n": 254,
  "topic": "log-exp",
  "q": "d/dx (e^(2*x^2 - 3*x + 1)) = ?",
  "options": [
   "e^(2*x^2 - 3*x + 1)",
   "e^x",
   "(3 - 4*x)*e^(2*x^2 - 3*x + 1)",
   "(4*x - 3)*e^(2*x^2 - 3*x + 1)"
  ],
  "answer": "D",
  "explain": "Chain rule: e^(...) ko andar wale expression ke derivative se multiply karo."
 },
 {
  "n": 255,
  "topic": "log-exp",
  "q": "d/dx (x*e^x) = ?",
  "options": [
   "(-x - 1)*e^(x)",
   "ln(x) + 1",
   "(x + 1)*e^(x)",
   "ln(x)"
  ],
  "answer": "C",
  "explain": "Product rule: e^x + x*e^x = e^x*(x + 1)."
 },
 {
  "n": 256,
  "topic": "log-exp",
  "q": "d/dx (ln(x^3)) = ?",
  "options": [
   "x",
   "3/x",
   "6/x",
   "-3/x"
  ],
  "answer": "B",
  "explain": "ln(x^3) = 3*ln(x), is liye derivative 3/x hota hai."
 },
 {
  "n": 257,
  "topic": "log-exp",
  "q": "d/dx (ln(4*x + 2)) = ?",
  "options": [
   "-2/(2*x + 1)",
   "2/(2*x + 1)",
   "1/x",
   "1/(2*x + 1)"
  ],
  "answer": "B",
  "explain": "Chain rule: 1/(4*x + 2) ko andar ke derivative 4 se multiply karo."
 },
 {
  "n": 258,
  "topic": "log-exp",
  "q": "d/dx (e^(3*x)) = ?",
  "options": [
   "3*e^(3*x)/2",
   "-3*e^(3*x)",
   "e^(x)",
   "3*e^(3*x)"
  ],
  "answer": "D",
  "explain": "Chain rule: e^(3*x) ko andar ke derivative 3 se multiply karo."
 },
 {
  "n": 259,
  "topic": "log-exp",
  "q": "d/dx (ln(x^4)) = ?",
  "options": [
   "4/x",
   "-4/x",
   "x",
   "8/x"
  ],
  "answer": "A",
  "explain": "ln(x^4) = 4*ln(x), is liye derivative 4/x hota hai."
 },
 {
  "n": 260,
  "topic": "log-exp",
  "q": "d/dx (ln(2*x)) = ?",
  "options": [
   "-1/x",
   "x",
   "1/x",
   "2/x"
  ],
  "answer": "C",
  "explain": "ln(2*x) ka derivative 1/x hota hai (constant 2 cancel ho jata hai)."
 },
 {
  "n": 261,
  "topic": "log-exp",
  "q": "d/dx (ln(x^2 + 1)) = ?",
  "options": [
   "1/x",
   "-2*x/(x^2 + 1)",
   "1/(x^2 + 1)",
   "2*x/(x^2 + 1)"
  ],
  "answer": "D",
  "explain": "Chain rule: 1/(x^2 + 1) ko andar ke derivative 2x se multiply karo."
 },
 {
  "n": 262,
  "topic": "log-exp",
  "q": "d/dx (e^(3*x^2 + x + 1)) = ?",
  "options": [
   "e^x",
   "(-6*x - 1)*e^(3*x^2 + x + 1)",
   "(6*x + 1)*e^(3*x^2 + x + 1)",
   "e^(3*x^2 + x + 1)"
  ],
  "answer": "C",
  "explain": "Chain rule: e^(...) ko andar wale expression ke derivative se multiply karo."
 },
 {
  "n": 263,
  "topic": "log-exp",
  "q": "d/dx (ln(5*x + 2)) = ?",
  "options": [
   "1/x",
   "5/(5*x + 2)",
   "-5/(5*x + 2)",
   "5/(2*(5*x + 2))"
  ],
  "answer": "B",
  "explain": "Chain rule: 1/(5*x + 2) ko andar ke derivative 5 se multiply karo."
 },
 {
  "n": 264,
  "topic": "log-exp",
  "q": "d/dx (log_2(x)) = ?",
  "options": [
   "1/(x*ln(2))",
   "-1/(x*ln(2))",
   "x",
   "2/(x*ln(2))"
  ],
  "answer": "A",
  "explain": "log_2(x) ka derivative 1/(x*ln(2)) hota hai."
 },
 {
  "n": 265,
  "topic": "log-exp",
  "q": "d/dx (e^(x^2 + 1)) = ?",
  "options": [
   "-2*x*e^(x^2 + 1)",
   "e^x",
   "e^(x^2 + 1)",
   "2*x*e^(x^2 + 1)"
  ],
  "answer": "D",
  "explain": "Chain rule: e^(...) ko andar wale expression ke derivative se multiply karo."
 },
 {
  "n": 266,
  "topic": "log-exp",
  "q": "d/dx (e^(2*x^2 + 2*x + 1)) = ?",
  "options": [
   "(-4*x - 2)*e^(2*x^2 + 2*x + 1)",
   "(4*x + 2)*e^(2*x^2 + 2*x + 1)",
   "e^(2*x^2 + 2*x + 1)",
   "e^x"
  ],
  "answer": "B",
  "explain": "Chain rule: e^(...) ko andar wale expression ke derivative se multiply karo."
 },
 {
  "n": 267,
  "topic": "log-exp",
  "q": "d/dx (e^(2*x^2 - 2*x + 1)) = ?",
  "options": [
   "(4*x - 2)*e^(2*x^2 - 2*x + 1)",
   "e^(2*x^2 - 2*x + 1)",
   "(2 - 4*x)*e^(2*x^2 - 2*x + 1)",
   "e^x"
  ],
  "answer": "A",
  "explain": "Chain rule: e^(...) ko andar wale expression ke derivative se multiply karo."
 },
 {
  "n": 268,
  "topic": "log-exp",
  "q": "d/dx (ln(3*x)) = ?",
  "options": [
   "-1/x",
   "2/x",
   "1/x",
   "x"
  ],
  "answer": "C",
  "explain": "ln(3*x) ka derivative 1/x hota hai (constant 3 cancel ho jata hai)."
 },
 {
  "n": 269,
  "topic": "log-exp",
  "q": "d/dx (ln(2*x + 3)) = ?",
  "options": [
   "-2/(2*x + 3)",
   "1/x",
   "1/(2*x + 3)",
   "2/(2*x + 3)"
  ],
  "answer": "D",
  "explain": "Chain rule: 1/(2*x + 3) ko andar ke derivative 2 se multiply karo."
 },
 {
  "n": 270,
  "topic": "log-exp",
  "q": "d/dx (ln(5*x + 5)) = ?",
  "options": [
   "1/(2*(x + 1))",
   "1/x",
   "1/(x + 1)",
   "-1/(x + 1)"
  ],
  "answer": "C",
  "explain": "Chain rule: 1/(5*x + 5) ko andar ke derivative 5 se multiply karo."
 },
 {
  "n": 271,
  "topic": "partial",
  "q": "Partial derivative f_x ka matlab kya hai?",
  "options": [
   "y ko constant rakh kar x ke respect mein derivative",
   "x aur y dono ke respect mein derivative",
   "x ko constant rakh kar y ke respect mein derivative",
   "Function ka total change"
  ],
  "answer": "A",
  "explain": "f_x nikalte waqt y ko constant samjha jata hai."
 },
 {
  "n": 272,
  "topic": "partial",
  "q": "f(x,y) mein f_x nikalte waqt y ko kya samjha jata hai?",
  "options": [
   "Function",
   "Constant",
   "Zero",
   "Variable"
  ],
  "answer": "B",
  "explain": "Partial derivative mein sirf ek variable change hota hai, baqi sab constant hote hain."
 },
 {
  "n": 273,
  "topic": "partial",
  "q": "Mixed partial f_xy aur f_yx ka talluq kya hai?",
  "options": [
   "f_xy = -f_yx hota hai",
   "In ka koi talluq nahi hota",
   "Agar function continuous ho to f_xy = f_yx (Clairaut's theorem)",
   "Hamesha alag hote hain"
  ],
  "answer": "C",
  "explain": "Clairaut's theorem ke mutabiq mixed partials barabar hote hain jab function smooth ho."
 },
 {
  "n": 274,
  "topic": "partial",
  "q": "f(x,y) = -2*x^2*y + 4*x*y^2 + 2*y ho to f_x = ?",
  "options": [
   "-2*x^2 + 8*x*y + 2",
   "4*x*y - 4*y^2",
   "-4*x*y + 4*y^2 + 1",
   "-4*x*y + 4*y^2"
  ],
  "answer": "D",
  "explain": "Partial derivative mein baqi variable ko constant samajh kar derivative lo."
 },
 {
  "n": 275,
  "topic": "partial",
  "q": "f(x,y,z) = x^2*y*z + 2*x*z^2 + 3*y^2*z ho to f_y = ?",
  "options": [
   "x^2*z + 6*y*z",
   "-x^2*z - 6*y*z",
   "2*x*y*z + 2*z^2",
   "x^2*z + 6*y*z + 1"
  ],
  "answer": "A",
  "explain": "Partial derivative mein baqi do variables ko constant samajh kar derivative lo."
 },
 {
  "n": 276,
  "topic": "partial",
  "q": "f(x,y) = cos(x*y) ho to f_y = ?",
  "options": [
   "x*sin(x*y)",
   "-x*sin(x*y)",
   "-sin(x*y)",
   "-y*sin(x*y)"
  ],
  "answer": "B",
  "explain": "f_y mein x constant hai, chain rule se -x*sin(x*y) milta hai."
 },
 {
  "n": 277,
  "topic": "partial",
  "q": "f(x,y,z) = ln(x*y*z) ho to f_z = ?",
  "options": [
   "1 + 1/z",
   "1/z",
   "1/x",
   "-1/z"
  ],
  "answer": "B",
  "explain": "ln(x*y*z) = ln(x) + ln(y) + ln(z), is liye f_z = 1/z hota hai."
 },
 {
  "n": 278,
  "topic": "partial",
  "q": "f(x,y) = x^3*y^2 + 2*x^2*y - 3*y^3 ho to f_xy = ?",
  "options": [
   "2*x^3*y + 2*x^2 - 9*y^2",
   "2*y*(3*x*y + 2)",
   "2*x*(3*x*y + 2)",
   "3*x^2*y^2 + 4*x*y"
  ],
  "answer": "C",
  "explain": "Pehle x ke respect mein, phir y ke respect mein derivative lo."
 },
 {
  "n": 279,
  "topic": "partial",
  "q": "f(x,y) = -3*x^2*y - x*y^2 - 2*x + 3*y ho to f_x(1, 1) = ?",
  "options": [
   "-9",
   "-10",
   "-8",
   "9"
  ],
  "answer": "A",
  "explain": "Pehle f_x nikalo, phir x = 1 aur y = 1 daal do."
 },
 {
  "n": 280,
  "topic": "partial",
  "q": "f(x,y) = 3*x^2*y - 3*x*y^2 + 4*x - 3*y ho to f_y = ?",
  "options": [
   "-3*x^2 + 6*x*y + 3",
   "6*x*y - 3*y^2 + 4",
   "3*x^2 - 6*x*y - 2",
   "3*x^2 - 6*x*y - 3"
  ],
  "answer": "D",
  "explain": "Partial derivative mein baqi variable ko constant samajh kar derivative lo."
 },
 {
  "n": 281,
  "topic": "partial",
  "q": "f(x,y,z) = -x^2*y*z - 3*x*z^2 + y^2*z ho to f_y = ?",
  "options": [
   "-x^2*z + 2*y*z + 1",
   "x^2*z - 2*y*z",
   "-2*x*y*z - 3*z^2",
   "-x^2*z + 2*y*z"
  ],
  "answer": "D",
  "explain": "Partial derivative mein baqi do variables ko constant samajh kar derivative lo."
 },
 {
  "n": 282,
  "topic": "partial",
  "q": "f(x,y) = ln(x^2 + y^2) ho to f_x = ?",
  "options": [
   "2*x/(x^2 + y^2)",
   "1/(x^2 + y^2)",
   "2*y/(x^2 + y^2)",
   "-2*x/(x^2 + y^2)"
  ],
  "answer": "A",
  "explain": "f_x mein y constant hai, chain rule se 2x/(x^2 + y^2) milta hai."
 },
 {
  "n": 283,
  "topic": "partial",
  "q": "f(x,y) = -x^3*y^2 - 3*x^2*y + 2*y^3 ho to f_yy = ?",
  "options": [
   "-6*y*(x*y + 1)",
   "2*(-x^3 + 6*y)",
   "-3*x^2*y^2 - 6*x*y",
   "-2*x^3*y - 3*x^2 + 6*y^2"
  ],
  "answer": "B",
  "explain": "y ke respect mein do dafa derivative lo, x ko constant samjho."
 },
 {
  "n": 284,
  "topic": "partial",
  "q": "f(x,y) = -x^2*y - 2*x*y^2 + x + 3*y ho to f_y(1, 2) = ?",
  "options": [
   "-7",
   "-5",
   "-6",
   "6"
  ],
  "answer": "C",
  "explain": "Pehle f_y nikalo, phir x = 1 aur y = 2 daal do."
 },
 {
  "n": 285,
  "topic": "partial",
  "q": "f(x,y) = -3*x^2*y + 4*x*y^2 - x - 3*y ho to f_x = ?",
  "options": [
   "-6*x*y + 4*y^2",
   "-6*x*y + 4*y^2 - 1",
   "6*x*y - 4*y^2 + 1",
   "-3*x^2 + 8*x*y - 3"
  ],
  "answer": "B",
  "explain": "Partial derivative mein baqi variable ko constant samajh kar derivative lo."
 },
 {
  "n": 286,
  "topic": "partial",
  "q": "f(x,y,z) = -x^2*y*z - 2*x*z^2 + 2*y^2*z ho to f_x = ?",
  "options": [
   "-2*x*y*z - 2*z^2 + 1",
   "2*x*y*z + 2*z^2",
   "-x^2*z + 4*y*z",
   "-2*x*y*z - 2*z^2"
  ],
  "answer": "D",
  "explain": "Partial derivative mein baqi do variables ko constant samajh kar derivative lo."
 },
 {
  "n": 287,
  "topic": "partial",
  "q": "f(x,y) = x^3*y^2 - x^2*y + 2*y^3 ho to f_xy = ?",
  "options": [
   "3*x^2*y^2 - 2*x*y",
   "2*y*(3*x*y - 1)",
   "2*x*(3*x*y - 1)",
   "2*x^3*y - x^2 + 6*y^2"
  ],
  "answer": "C",
  "explain": "Pehle x ke respect mein, phir y ke respect mein derivative lo."
 },
 {
  "n": 288,
  "topic": "partial",
  "q": "f(x,y) = x^2*y + 3*x*y^2 + 2*y ho to f_x(2, 1) = ?",
  "options": [
   "7",
   "-7",
   "8",
   "6"
  ],
  "answer": "A",
  "explain": "Pehle f_x nikalo, phir x = 2 aur y = 1 daal do."
 },
 {
  "n": 289,
  "topic": "partial",
  "q": "f(x,y) = 2*x^2*y + 2*x*y^2 + 3*x ho to f_x = ?",
  "options": [
   "4*x*y + 2*y^2 + 3",
   "2*x^2 + 4*x*y",
   "-4*x*y - 2*y^2 - 3",
   "4*x*y + 2*y^2 + 4"
  ],
  "answer": "A",
  "explain": "Partial derivative mein baqi variable ko constant samajh kar derivative lo."
 },
 {
  "n": 290,
  "topic": "partial",
  "q": "f(x,y,z) = -x^2*y*z + 3*x*z^2 - y^2*z ho to f_y = ?",
  "options": [
   "-2*x*y*z + 3*z^2",
   "-x^2*z - 2*y*z",
   "-x^2*z - 2*y*z + 1",
   "x^2*z + 2*y*z"
  ],
  "answer": "B",
  "explain": "Partial derivative mein baqi do variables ko constant samajh kar derivative lo."
 },
 {
  "n": 291,
  "topic": "partial",
  "q": "f(x,y) = sqrt(x^2 + y^2) ho to f_x = ?",
  "options": [
   "y/sqrt(x^2 + y^2)",
   "1/sqrt(x^2 + y^2)",
   "-x/sqrt(x^2 + y^2)",
   "x/sqrt(x^2 + y^2)"
  ],
  "answer": "D",
  "explain": "f_x mein y constant hai, chain rule se x/sqrt(x^2 + y^2) milta hai."
 },
 {
  "n": 292,
  "topic": "partial",
  "q": "f(x,y,z) = ln(x*y*z) ho to f_y = ?",
  "options": [
   "1/x",
   "1 + 1/y",
   "1/y",
   "-1/y"
  ],
  "answer": "C",
  "explain": "ln(x*y*z) = ln(x) + ln(y) + ln(z), is liye f_y = 1/y hota hai."
 },
 {
  "n": 293,
  "topic": "partial",
  "q": "f(x,y) = 3*x^3*y^2 - x^2*y + y^3 ho to f_xx = ?",
  "options": [
   "9*x^2*y^2 - 2*x*y",
   "2*y*(9*x*y - 1)",
   "6*x^3*y - x^2 + 3*y^2",
   "6*(x^3 + y)"
  ],
  "answer": "B",
  "explain": "x ke respect mein do dafa derivative lo, y ko constant samjho."
 },
 {
  "n": 294,
  "topic": "partial",
  "q": "f(x,y) = -2*x^2*y + 2*x*y^2 - 3*x - 3*y ho to f_x(1, 1) = ?",
  "options": [
   "-4",
   "5",
   "-5",
   "-6"
  ],
  "answer": "C",
  "explain": "Pehle f_x nikalo, phir x = 1 aur y = 1 daal do."
 },
 {
  "n": 295,
  "topic": "partial",
  "q": "f(x,y) = 3*x^2*y + 4*x*y^2 - 4*x - 4*y ho to f_y = ?",
  "options": [
   "6*x*y + 4*y^2 - 4",
   "-3*x^2 - 8*x*y + 4",
   "3*x^2 + 8*x*y - 3",
   "3*x^2 + 8*x*y - 4"
  ],
  "answer": "D",
  "explain": "Partial derivative mein baqi variable ko constant samajh kar derivative lo."
 },
 {
  "n": 296,
  "topic": "partial",
  "q": "f(x,y) = x^y ho to f_x = ?",
  "options": [
   "x^y*y/x",
   "-x^y*y/x",
   "x^y",
   "x^y*ln(x)"
  ],
  "answer": "A",
  "explain": "f_x mein y constant hai, power rule se y*x^(y-1) milta hai."
 },
 {
  "n": 297,
  "topic": "partial",
  "q": "f(x,y) = 3*x^3*y^2 - 3*x^2*y - y^3 ho to f_xy = ?",
  "options": [
   "6*y*(3*x*y - 1)",
   "6*x*(3*x*y - 1)",
   "6*x^3*y - 3*x^2 - 3*y^2",
   "9*x^2*y^2 - 6*x*y"
  ],
  "answer": "B",
  "explain": "Pehle x ke respect mein, phir y ke respect mein derivative lo."
 },
 {
  "n": 298,
  "topic": "partial",
  "q": "f(x,y) = -3*x^2*y + x*y^2 - x ho to f_y(2, 1) = ?",
  "options": [
   "-7",
   "-9",
   "-8",
   "8"
  ],
  "answer": "C",
  "explain": "Pehle f_y nikalo, phir x = 2 aur y = 1 daal do."
 },
 {
  "n": 299,
  "topic": "partial",
  "q": "f(x,y) = 2*x^2*y + 3*x*y^2 - 3*x + 3*y ho to f_y = ?",
  "options": [
   "2*x^2 + 6*x*y + 3",
   "2*x^2 + 6*x*y + 4",
   "-2*x^2 - 6*x*y - 3",
   "4*x*y + 3*y^2 - 3"
  ],
  "answer": "A",
  "explain": "Partial derivative mein baqi variable ko constant samajh kar derivative lo."
 },
 {
  "n": 300,
  "topic": "partial",
  "q": "f(x,y,z) = -3*x^2*y*z - x*z^2 - y^2*z ho to f_y = ?",
  "options": [
   "-3*x^2*z - 2*y*z + 1",
   "3*x^2*z + 2*y*z",
   "-6*x*y*z - z^2",
   "-3*x^2*z - 2*y*z"
  ],
  "answer": "D",
  "explain": "Partial derivative mein baqi do variables ko constant samajh kar derivative lo."
 }
];
