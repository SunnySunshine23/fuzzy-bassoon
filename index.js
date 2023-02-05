const form = document.querySelector('.form');

const h1 = document.createElement("h1");
h1.textContent = ("Выбери сложность");
h1.classList.add('h1');
form.appendChild(h1);

const chooseLevel = document.createElement('div');
chooseLevel.classList.add("chooseLevel")
form.appendChild(chooseLevel);

    const levelOne = document.createElement("div");
    levelOne.textContent = ("1");
    levelOne.classList.add("level");
    levelOne.classList.add("levelOne");
    chooseLevel.appendChild(levelOne);

    const levelTwo = document.createElement("div");
    levelTwo.textContent = ("2");
    levelTwo.classList.add("level");
    levelTwo.classList.add("levelTwo");
    chooseLevel.appendChild(levelTwo);

    const levelThree = document.createElement("div");
    levelThree.textContent = ("3");
    levelThree.classList.add("level");
    levelThree.classList.add("levelThree");
    chooseLevel.appendChild(levelThree);

    const startButton = document.createElement("button");
    startButton.textContent = ("Старт");
    startButton.classList.add("startBtn")
    form.appendChild(startButton);

    window.application = {
        blocks: {},
        screens: {},
        level: '',
    
        renderScreen: function(screenName) {
          
          if (window.application.screens[screenName]){
            app.innerHTML = '';
          window.application.screens[screenName]();
          } else {
            console.log(`this screen doesn't exist`);
          }
        },
        
        renderBlock: function(blockName, container) {
          if (window.application.blocks[blockName]){
            window.application.blocks[blockName](container);
          } else {
            console.log(`block ${blockName} doesn't exist`);
          }
    
        },
        
      }
// предполагалось что это будет работать
      const levels = document.querySelectorAll('.level');
      console.log(levels); 
      // но тут выходит нодлист вместо элементов
      levels.addEventListener('click', () => {
        window.application.screens['game'] = renderScreenGame;
        window.application.renderScreen('game');

      })
// плюс я поняла что не использую кнопку старт. пока что идеи закончились
      