const headers = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImg = document.querySelector('#profile_img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsText = document.querySelectorAll('.animated-bg-text');

const getData = () => {
  header.innerHTML = `
            <img src="https://source.unsplash.com/WiONHd_zYI4" alt="computer">
    `;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, libero!`;
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/women/33.jpg" alt="profile image">`;
  name.innerHTML = `Jane Davidson`;
  date.innerHTML = `Oct 08, 2020`;

  animatedBgs.forEach((animation) => animation.classList.remove('animated-bg'));
  animatedBgsText.forEach((animation) =>
    animation.classList.remove('animated-bg-text')
  );
};

setTimeout(getData, 2500);
