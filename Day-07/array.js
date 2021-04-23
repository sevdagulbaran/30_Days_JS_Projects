//  Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  
    // Some and Every Checks
    /*  Eğer dizi elemanlarından bir tanesi bile koşulu sağlarsa geriye true değeri döndürülür. 
    Eğer bir tane bile koşulu sağlayan dizi elemanı olmazsa geriye false değeri döndürülür.*/
    // Array.prototype.some() // is at least one person 19?
    // const isAdult = people.some(function(person) {
    //   const currentYear = (new Date()).getFullYear();
    //   if(currentYear - person.year >= 19) {
    //     return true;
    //   }
    // });


    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

    console.log({isAdult});


    // Array.prototype.every() // is everyone 19?
    /**
     * Belirli bir dizi içerisinde vereceğimiz koşula, tüm elemanların uyup uymadığını kontrol ediyor.
     * Burada every methodu bir callback ve index alıyor parametre olarak. Callback fonksiyonu içerisindeki koşul falsy bir değer dönene kadar çalışır.
     * every çağırıldığı diziyi etkilemez, değiştirmez.
     */
    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

    console.log({allAdults});

     // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    //find() metodu parametre olarak verilen, true/false değer döndüren test fonksiyonunu karşılayan dizi içerisindeki ilk elemanın değerini döndürür.
    // Aksi halde undefined döndürür.
    
    const comment = comments.find(comment => comment.id === 823423);

    console.log(comment);

        // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    // diziye method geçerken, test kuralına ilk uyan elemanın indexini bulmaya yarıyor. 
    

    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // comments.splice(index, 1);//diziye eleman/elemanlar eklenebilmesini ya da silinebilmesini sağlar.

    /* slice(); kendisine parametre olarak verilecek olan dizi aralığında bulunan değerleri kopyalayarak,
     yeni bir dizi oluşturur.*/
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];