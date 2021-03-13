module.exports = function toReadable (number) {
    let number_string = "";
    let check_num = "";
    i = countDigits(number);
        if (i == 3 || number==100){
            check_num = Math.floor(number / 100);
            number = number % 100;
            number_string += check_one_order(check_num) + " hundred";

            if (number >= 10 && number <20){
                number_string +=" " + check_one_order(number);
            }
            else {
                let check_num =  Math.floor(number / 10);
                number %= 10;
                let temp_space = check_num == 0 ? "" : " ";
                number_string +=temp_space + check_two_order(check_num);

                if (number != 0){
                    number_string+=" " + check_one_order(number);
                }
            }
        }
        else if (i == 2 && number!= 100){
            if (number >= 10 && number <20){
                number_string +=check_one_order(number);
            }
            else {
                let check_num =  Math.floor(number / 10);
                number %= 10;
                number_string +=check_two_order(check_num);

                if (number != 0){
                    number_string+=" " + check_one_order(number);
                }
            }
        }
        else if (i == 1 || i==0){
                number_string += check_one_order(number);
        }
    return number_string;
}

function countDigits(n) {
    for(var i = 0; n > 1; i++) {
        n /= 10;
    }
    return i;
}

function check_one_order(num){
    let result = "";
    switch (num){
        case 0 : result = "zero";
        break;
        case 1 : result = "one";
        break;
        case 2 : result = "two";
        break;
        case 3 : result = "three";
        break;
        case 4 : result = "four";
        break;
        case 5 : result = "five";
        break;
        case 6 : result = "six";
        break;
        case 7 : result = "seven";
        break;
        case 8 : result = "eight";
        break;
        case 9 : result = "nine";
        break;
        case 10 : result = "ten";
        break;
        case 11 : result = "eleven";
        break;
        case 12 : result = "twelve";
        break;
        case 13 : result = "thirteen";
        break;
        case 14 : result = "fourteen";
        break;
        case 15 : result = "fifteen";
        break;
        case 16 : result = "sixteen";
        break;
        case 17 : result = "seventeen";
        break;
        case 18 : result = "eighteen";
        break;
        case 19 : result = "nineteen";
        break;
    }
    return result;
}
function check_two_order(num){
    let result = "";
    switch (num){
        case 2 : result = "twenty";
        break;
        case 3 : result = "thirty";
        break;
        case 4 : result = "forty";
        break;
        case 5 : result = "fifty";
        break;
        case 6 : result = "sixty";
        break;
        case 7 : result = "seventy";
        break;
        case  8 : result = "eighty";
        break;
        case  9 : result = "ninety";
        break;
    }
    return result;
}


