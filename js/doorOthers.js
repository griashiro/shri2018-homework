// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door0(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2')
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = true;
        buttons.forEach(function(b) {
            if (!b.classList.contains('door-riddle__button_pressed')) {
                isOpened = false;
            }
        });

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
}

// Наследуемся от класса DoorBase
Door0.prototype = Object.create(DoorBase.prototype);
Door0.prototype.constructor = DoorBase;
// END ===================== Пример кода первой двери =======================

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door1(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия второй двери здесь ====
    const buttons = this.getButtons(...this.getButtonsClasses());
    const activeButtons = Array(buttons.length).fill(false);
    const lockButton = this.getLockButton();

    this.hide(...buttons, lockButton);
    this.setEventListeners(this, buttons, _onDown, _onMove, _onUp);
    lockButton.addEventListener('pointerup', () => {
        this.unlock();
    })

    function _onDown(e) {
        e.target.classList.add('stairs-riddle__button_pressed');
    }

    function _onMove(e) {
        const buttonId = Number(e.target.dataset.buttonid);
        const nextButton = buttonId < buttons.length - 1 ? buttonId + 1 : buttonId;
        const classList = e.target.classList;

        if (isActive(e)) {
            classList.add('stairs-riddle__button_active');
            activeButtons[buttonId] = true;
            buttons[nextButton].classList.remove('stairs-riddle__button_hidden');

            if (checkCondition()) {
                lockButton.classList.remove('stairs-riddle__button_hidden');
            }
        } else {
            e.target.classList.remove('stairs-riddle__button_active');
            activeButtons[buttonId] = false;

            if (buttonId !== nextButton) {
                buttons[nextButton].classList.add('stairs-riddle__button_hidden');
            }
        }
    }

    function _onUp() {
        this.diactive(...buttons);
        this.collapse(...buttons);
        this.hide(...buttons);
    }

    function isActive(e) {
        const offsetThreshold = 40;
        const dataset = e.target.dataset;

        const isTopButton = dataset.buttonid == 0 || dataset.buttonid == 2

        if (isTopButton) {
            return e.offsetY < offsetThreshold;
        } else {
            return e.offsetY > e.target.offsetHeight - offsetThreshold;
        }
    }

    function checkCondition() {
        return activeButtons.every((isActive) => {
            return isActive;
        })
    }
    // ==== END Напишите свой код для открытия второй двери здесь ====
}

Door1.prototype = Object.create(DoorBase.prototype);
Door1.prototype.constructor = DoorBase;

Door1.prototype.getButtons = function () {
    const buttons = [];

    for (var i = 0, len = arguments.length; i < len; ++i) {
        buttons.push(this.popup.querySelector(arguments[i]));
    }

    return buttons;
}

Door1.prototype.getLockButton = function () {
    return this.popup.querySelector('.lock__picture');
}

Door1.prototype.getButtonsClasses = function () {
    const BUTTONS_COUNT = 4;
    const buttonsNames = [];

    for (let i = 0, len = BUTTONS_COUNT; i < len; ++i) {
        buttonsNames.push('.stairs-riddle__button_' + i);
    }

    return buttonsNames;
}

Door1.prototype.setEventListeners = function (self, buttons, onDown, onMove, onUp) {
    buttons.forEach((b) => {
        b.addEventListener('pointerdown', onDown.bind(self));
        b.addEventListener('pointermove', onMove.bind(self));
        b.addEventListener('pointerleave', onUp.bind(self));
        b.addEventListener('pointerup', onUp.bind(self));
        b.addEventListener('pointercancel', onUp.bind(self));
    })
}

Door1.prototype.hide = function () {
    const SECOND_BUTTON = 1;
    for (let i = SECOND_BUTTON, len = arguments.length; i < len; ++i) {
        arguments[i].classList.add('stairs-riddle__button_hidden');
    }
}

Door1.prototype.collapse = function () {
    for (let i = 0, len = arguments.length; i < len; ++i) {
        arguments[i].classList.remove('stairs-riddle__button_pressed');
    }
}

Door1.prototype.diactive = function (buttons) {
    for (let i = 0, len = arguments.length; i < len; ++i) {
        arguments[i].classList.remove('stairs-riddle__button_active');
    }
}
/**
 * @class Door2
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door2(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия третей двери здесь ====
    // Для примера дверь откроется просто по клику на неё
    this.popup.addEventListener('click', function() {
        this.unlock();
    }.bind(this));
    // ==== END Напишите свой код для открытия третей двери здесь ====
}
Door2.prototype = Object.create(DoorBase.prototype);
Door2.prototype.constructor = DoorBase;

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Box(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия сундука здесь ====
    // Для примера сундук откроется просто по клику на него
    this.popup.addEventListener('click', function() {
        this.unlock();
    }.bind(this));
    // ==== END Напишите свой код для открытия сундука здесь ====

    this.showCongratulations = function() {
        alert('Поздравляю! Игра пройдена!');
    };
}
Box.prototype = Object.create(DoorBase.prototype);
Box.prototype.constructor = DoorBase;
