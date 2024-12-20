let currentMessageIndex = 0;

async function mulai() {
  const { value: nama } = await Swal.fire({
    title: 'Nama kamu?',
    input: 'text',
    confirmButtonText: 'Lanjut',
    allowOutsideClick: false
  });

  if (nama) {
    document.getElementById('kamu').textContent = nama; 
    document.getElementById('background-music').play();
    tampilkanPesan();
  } else {
    Swal.fire('Nama tidak boleh kosong!');
    mulai();
  }
}

async function tampilkanPesan() {
  const scrollImage = document.getElementById('scrollImage');
  const messages = scrollImage.querySelectorAll('p'); 

  if (currentMessageIndex < messages.length) {
    const pesan = messages[currentMessageIndex].innerHTML; 
    currentMessageIndex++;

    await Swal.fire({
      html: pesan, 
      confirmButtonText: 'lagi',
      allowOutsideClick: false
    });

    tampilkanPesan(); 
  } else {
    await Swal.fire({
      title: 'Lop u ❤️',
      confirmButtonText: 'Lop u too mass'
    });
  }
}

mulai();
