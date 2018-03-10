/**
 * @class App
 * @param {Element} el
 */
function App(el) {
    var appEl = el,
        doors = [
            new Door0(0, onUnlock),
            new Door1(1, onUnlock),
            new Door2(2, onUnlock),
            new Box(3, onUnlock)
        ];

    this.doors = doors;

    // TODO: Убрать. Добавлено для ручного тестирования. 
    this.doors[0].enable()
    this.doors[1].enable()
    this.doors[2].enable()

    /**
     * Callback вызывается в коде двери
     * Тут даем возможность открыть следующие двери
     */
    function onUnlock() {
        var previousUnlocked;

        // Даем открыть следующую дверь
        for (var i = 0; i < doors.length; i++) {
            if (!doors[i].isLocked) {
                previousUnlocked = true;
            } else {
                if (previousUnlocked && doors[i].isLocked) {
                    doors[i].enable();
                    break;
                }
            }
        }
    };
}

// Start the app
var app = new App(document.querySelector('.app'));
