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
          // yyyy-mm-dd
          var dates = this.birthday.split("-")
          var improvedDates = []
          

        }
      },
    },
  })
