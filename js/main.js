var app = new Vue({
    el: '#app',
    data: {
      page : 'home',
      birthday : '',
      names: [{ name: "" }],
      // '\' ?
      specCharacters : [' ','!','”','#','$','%','&','’','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
    },

    methods: {
      addName(fieldType) {
        fieldType.push({ value: "" });
      },

      removeName(index, fieldType) {
        fieldType.splice(index, 1);
      },

      generatePasswords() {
        if (this.birthday == ''){
          console.log('Erro');
          //TODO Create alert element onscreen
        }else{
          var dates = this.birthday.split("-")
          var improvedDates = []

          for (var i = 0 ; i < 2; i++){
            for (var a = 0 ; a < dates.length ; a++){
              for (var b = 0 ; b < dates.length ; b++){
                for (var c = 0 ; c < dates.length ; c++){
                  if (a != b && a != c && b != c){
                    improvedDates.push(dates[a]+dates[b]+dates[c])
                  }
                }
              }
            }
            if(dates[0].length == 4){
              for (var a = 0; a < dates.length; a++) {
                for (var b = 0; b < dates.length; b++) {
                  if ( a != b){
                    improvedDates.push(dates[a]+dates[b])
                  }
                }
              }
              dates[0] = dates[0].substring(2)
              for (var a = 0; a < dates.length; a++) {
                for (var b = 0; b < dates.length; b++) {
                  if ( a != b){
                    improvedDates.push(dates[a]+dates[b])
                  }
                }
              }
            }
          }

          improvedDates = removeDuplicates(improvedDates);

          console.log(improvedDates);

        }
      },

    },
  })

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
