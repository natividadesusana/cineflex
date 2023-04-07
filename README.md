# Cineflex Project

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571807-3c82dbd4-7f3b-400f-af9a-212c4cc7a394.png" >
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571818-b17ef207-9a94-4356-97ab-c08e42f22ee6.png">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224572892-58ad581a-2d26-49aa-9eeb-002546c2669a.png">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571825-b30898e6-f661-4539-96b3-f5943502d1b8.png" >
</div>

#### Demo: https://projeto10-cineflex-bay.vercel.app/

<hr/>

## ℹ️ About
Cineflex is a web application that allows users to reserve seats to watch a movie at a movie theater. The main features of the project include:

- Choose a movie from a list of popular movies;
- Choose a session to watch the movie;
- Select available seats for the chosen session;
- Reserve the selected seats;
- View the booking confirmation.

Cineflex was developed as a personal project to practice my web development skills. I was motivated to create this application because it is a tool that can be useful for many people and can be used in different contexts

<hr/>

## 🛠️ Technologies

<div> 
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" /> 
<div>
<br>

I chose to use React.js because it is one of the most popular web development libraries today and provides a scalable and maintainable framework for building modern web applications. React Router was used to manage application routes. Axios was used to make API calls to fetch information about available movies, sessions and seats. Styled-Components was used to create the user interface and provide a nice and intuitive experience for users.

<hr/>
  
## ⚙️ Functionalities

### Movie Choice (/)
On the home screen, you can view a list of popular movies. The user can select a movie to see more information and choose a session to watch the movie.

### Choose Session (/sessoes/:idMovie)
On this screen, the user can choose a session to watch the chosen movie. Session information such as time and number of available seats is provided by the API.

### Seat Selection (/seats/:idSessao)
On this screen, the user can select the seats for the chosen session. Available seats are marked in green and seats selected by the user are marked in blue. The user can select or deselect seats by clicking on them.

<hr/>
  
## 🚀 Next Steps
- Implement a login system for users to save their information and history
- Add a feature for users to rate and review movies
- Implement an admin panel to manage movies and sessions

<hr/>
  
## 🖇 How to run
To run this project locally, you'll need to follow these steps:

1. Clone this repository: git clone https://github.com/natividadesusana/cineflex.git
2. Install the dependencies: npm install
3. Run the development server: npm start
4. Access http://localhost:3000 in your browser to see the app running.

<hr/>

## How to Contribute
Contributions are always welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or pull request.
