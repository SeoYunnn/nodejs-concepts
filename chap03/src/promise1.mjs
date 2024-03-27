import fs from "fs/promises"

async function answer() {

  const result = await Promise.all([

    new Promise(resolve =>{ fs.readFile('./readme2.txt')
      .then((data) => {
        console.log('1번',data.toString());
        return fs.readFile('./readme2.txt');
      })}),

    new Promise(resolve =>{ fs.readFile('./readme2.txt')
      .then((data) => {
        console.log('2번',data.toString());
        return fs.readFile('./readme2.txt');
      })}),

    new Promise(resolve =>{ fs.readFile('./readme2.txt')
      .then((data) => {
        console.log('3번',data.toString());
        return fs.readFile('./readme2.txt');
      })})


  ]);

}

answer();