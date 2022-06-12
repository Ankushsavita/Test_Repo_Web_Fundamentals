// Ques 1.  Write a function to check if geekster exists in your array var list = ['geek','geekster','geeky'];If it exists  add some code to find the index of geekster and remove that item.

// sol : 

       var list = ['geek','geekster','geeky'];

      console.log(list);

      const index = list.indexOf('geekster');

      list.splice(index, 1);

      console.log(list);


      