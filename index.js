// Question no 1  greet with full name
document.write("<h2>greeetings with name</h2>")
let first_name = prompt("please input your first name!");
let last_name = prompt("please input your last name!");
let full_name = (first_name + " " + last_name);
alert("welcome to this page " + full_name)

//  question no 2    display input model and length
document.write("<h2>favourate phone</h2>")
let fav_phone = prompt("please input your favourate mobile phone model and i will display it and also length of it!");
document.write("<h4> My favourate phone is: ", fav_phone, "</h4>");
document.write("<h4> Length of string is: ", fav_phone.length, "</h4>");

//  question no 3     index of n  
document.write("<h2>Find index</h2>")
let word_pak = "pakistani";
// let letter_to_find="n";                            
// let index=word_pak.indexOf(letter_to_find);              there are two methods and more which you can use
document.write("<h4>string: ", word_pak, "</h4>");
document.write("<h4> index of n: ", word_pak.indexOf("n"))


// question no 4       last index of l               another method

document.write("<h2>last index </h2>")

let word_hel_wor = "Hello World";
let letter_to_find = "l";
let last_index = word_hel_wor.lastIndexOf(letter_to_find);
document.write("<h4> string: " + word_hel_wor, "</h4>");
document.write("<h4> last index of l: " + last_index + "</h4>");


//  question no   5      index of 3 we use .charAt for finding a character using by index number 

document.write("<h2>finding a character</h2>")
let word_paki = "pakistani";
// let find_to_char=word_paki.charAt(3);
document.write("<h4>string: ", word_paki, "</h4>");
document.write("<h4> index of 3: " + (word_paki.charAt(3)) + "</h4>")


// Question no 6  


// document.write("<h2>Message</h2>")



// Question no 7        replace method with string 

document.write("<h2>replace method with string</h2>")
let city = "Hyderabad";
let new_city = city.replace("Hyder", "islam");
document.write("<h4> City: " + city + " </h4>")
document.write("<h4> After replacement: " + new_city + "</h4>");

// // Question no 8

document.write("<h2>replace all same of words</h2>")
let message = "Ali and Sami are best friends. they play cricket and football together";
let replace_and = message.replaceAll("and", "&");
document.write("<h4>Message: " + message + "</h4>");
document.write("<h4>updated message: " + replace_and + "</h4>");



// Question no 9

document.write("<h2>convert string to number</h2>")
document.write("<h2>String to Number</h2>")
let string = "472";
let number = parseInt(string);
document.write("<h4>Value: ", string, "<br>type: string</h4>");
document.write("<h4> Value ", number, "<br> type: number");


//  Question no 10
document.write("<h2>Upper case</h2>");
let user_input = prompt("please input any word i will give you a capital letter of input");
let upper_case = user_input.toUpperCase();
document.write("<h4>User input: ", user_input, "</h4>");
document.write("<h4>Upper case: ", upper_case, "</h4>");


// // Question 11 ;

document.write("<h2>Title case</h2>")
function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
        return firstLetter.toUpperCase();
    });
}

let userInputToConvertTitleCase = prompt("Enter any Word i will convert word to TITLE CASE ");
document.write("<h4> User Input is : ", userInputToConvertTitleCase, "  <br> After Convert to TITLECASE : ", toTitleCase(userInputToConvertTitleCase), " </h4> ");

//  ANOTHER METHOD



// function toTitleCase(str) {
//     return str.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
//         return firstLetter.toUpperCase();
//     });
// }

// let userInputToConvertTitleCase = prompt("Enter any Word i will convert word to TITLE CASE ");
// 
// let totitleCase = userInputToConvertTitleCase.

// document.write("<h2> User Input is : ", totitleCase, "  <br> After Convert to TITLECASE : ", toTitleCase(totitleCase), " </h2> ");



// Question no 12

document.write("<h2>number to string</h2>")

let num = 35.36;
let num_string = num.toString();
let dot_remove = num_string.replace(".", "");                  ///another method   //abhi dot hatana hai
// let num_string=dot_remove.toString();
num_string = dot_remove
document.write("<h4>Number ", num, "</h4>");
document.write("<h4>Result ", num_string, "</h4>")

// question no 13;
// document.write("<h2>username without @!., </h2>")


// let user_name=prompt("please Enter something");
let special_characters = ["@", ".", ",", "!"];
while (true) {
    let user_name = prompt("please input anyhting");
    let specialchar = false;      //used as a flag     why is is givn to false i don,t no;
    for (i = 0; i < user_name.length; i++) {
        if (special_characters.includes(user_name[i])) {
            // alert("invalid input you input a special character " + special_characters);
            specialchar = true;
            break;
        }
    }
    if (specialchar === true) {
        alert("invalid input you input a special character ");
    } else {
        alert("Good you input a username without any special characters ")
        break;
    }
}










// Question no 14        //simple method

// document.write("<h2>identify order is avalible or not</h2>")

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let order_sir = prompt("WELCOME TO SAIN BAKERY! WHAT YOU WANT TO ORDER SIR");
if (A.includes(order_sir)) {
    alert(order_sir + " is avalible at index " + A.indexOf(order_sir) + " in our bakery")
} else {
    alert("We are sorry. " + order_sir + " is not avalible in our bakery");
};



// Question no 15
// document.write("<h2>password not less than   characters and does not start with number </h2>")

let alphabets = false;
let numbers = false;

while (true) {
    let password = prompt("please enter a password");
    if (password.charAt(0) >= 0 || password.charAt(0) <= 9) {
        alert("sorry! password should not start with number")
    } else if (password.length < 6) {
        alert("password should contain at least 7 letters");
    } else {
        for (i = 0; i < password.length; i++) {
            if (password[i] > "a" && password[i] < "z" || password[i] > "A" && pasword[i] < "Z") {
                alphabets = true;
                break;
            }
        }
        for (i = 0; i < password.length; i++) {
            if (password[i] > 0 && password[i] < 9) {
                numbers = true;
                break;
            }
        }
        if (numbers && alphabets) {
            alert("correct");
            break;
        } else {
            alert("password must contain letter and digit")
        }
    }
}


// Question no 16
document.write("<h2>split method</h2>")

var university = "university of karachi"
var split = university.split("");
document.write("<h4>" + split + "</h4>")


// Question no 17
document.write("<h2>display last character</h2>")


let any_input = prompt("please Enter any thing i will give a last character of it! ");
let last_char = any_input.charAt(any_input.length - 1);
document.write("<h4>" + last_char + "<h4>");


// Question no 18                  
document.write("<h2>split and counter method </h2>")

let text = "the quick brown fox jumps over the lazy dog"
let split_text = text.split(" ")                     //if we want a word match then we have to split by space and if we wand a character we don,t have to split
let match_word = "the";
let length = split_text.length;
var counter = 0
for (i = 0; i < length; i++) {
    if (split_text[i] == match_word) {
        counter++;
    }
}
document.write("occurance of: " + match_word + " is " + counter)





