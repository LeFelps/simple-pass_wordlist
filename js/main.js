var app = new Vue({
    el: '#app',
    data: {
      page : 'home',
      birthday : '',
      names: [{ name: "" }],
      specCharacters : [' ','!','”','#','$','%','&','’','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','\\','^','_','`','{','|','}','~']
    },

    methods: {

      //method for adding a new name input field
      addName(fieldType) {
        fieldType.push({ value: "" });
      },

      //method for removing a selected name input field
      removeName(index, fieldType) {
        fieldType.splice(index, 1);
      },

      generatePasswords() {

        // boolean variable for checking blank name inputs
        var blankName

        // loop structure that goes through each name and checks if its empty
        this.names.forEach(element => {
          if (element.name == ''){
            blankName = true
          }
        });

        // checking for empty required inputs
        if (this.birthday == '' || blankName){
          console.log('Erro');
          //TODO Create alert element onscreen
        }else{

          var dates = this.birthday.split("-")

          // array for improved date combinations 
          var improvedDates = []

          // array for password combinations
          var passwordsArray = []

          // string for the final password combinations text file
          var passwords = ''


          // loop structure for building improvedDates array with every combination of year, month and day with 'yyyy' and 'YY' formats
          for (var i = 0 ; i < 2; i++){
            for (var a = 0 ; a < dates.length ; a++){
              for (var b = 0 ; b < dates.length ; b++){
                for (var c = 0 ; c < dates.length ; c++){
                  if (a != b || a != c || b != c){
                    improvedDates.push(dates[a]+dates[b]+dates[c])
                  }
                }
              }
            }

            // structure to be run if year is still on 'yyyy' format
            if(dates[0].length == 4){
              for (var i = 0 ; i < 2; i++){
                if (i == 0){dates[0] = dates[0].substring(2)}
                for (var a = 0; a < dates.length; a++) {
                  for (var b = 0; b < dates.length; b++) {
                    if ( a != b){
                      improvedDates.push(dates[a]+dates[b])
                    }
                  }
                }
              }
            }
          }

          // duplicate removal from improvedDates array
          improvedDates = removeDuplicates(improvedDates);

          // loop structure for building passwords array
          for (var a = 0 ; a < improvedDates.length ; a++){
            for (var b = 0 ; b < this.specCharacters.length ; b++){
              for (var c = 0 ; c < this.names.length ; c++){

                  passwordsArray.push(improvedDates[a]+this.specCharacters[b]+this.names[c].name)
                  passwordsArray.push(improvedDates[a]+this.names[c].name+this.specCharacters[b])
                  passwordsArray.push(this.names[c].name+improvedDates[a]+this.specCharacters[b])
                  passwordsArray.push(this.names[c].name+this.specCharacters[b]+improvedDates[a])
                  passwordsArray.push(this.specCharacters[b]+this.names[c].name+improvedDates[a])
                  passwordsArray.push(this.specCharacters[b]+improvedDates[a]+this.names[c].name)

              }
            }
          }
          
          // create single string from passwords array, separated by line breaks
          passwords = passwordsArray.join("\n")

          // saving the passwords string as ma txt file
          var blob = new Blob([passwords], {type: "text/plain;charset=utf-8"});
          saveAs(blob, "passwords.txt");

        }
      },

    },
  })

  // function for removing duplicate entries used on the improvedDates array
  function removeDuplicates(array){
    var result = new Array();
    for (var a = array.length - 1; a >= 0; a--) {
      for (var b = array.length - 1; b >= 0; b--) {
        if(array[a] == array[b] && a != b){
          delete array[b];
        }
      };
        if(array[a] != undefined)
            result.push(array[a]);
    };
    return result;
  }
