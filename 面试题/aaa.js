
function asyncFn() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("111")
        resolve("111")
      }, 2000)
    } catch (e) {
      reject(e)
    }

  })
}

async function fff() {
  let aa = await asyncFn();
  console.log("222")
}
fff()
