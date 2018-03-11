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
    this.hideButtons(buttons);
    this.setEventListeners(this, buttons, _onPointerDown, _onPointerUp);

    function _onPointerDown (e) {
        const target = e.target;

        if (target.classList.contains('stairs-riddle__button')) {
            e.target.classList.add('stairs-riddle__button_pressed');
        }
    }

    function _onPointerUp () {
        this.collapseButtons(buttons);
        this.hideButtons(buttons);
    }

    // Для примера дверь откроется просто по клику на неё
    this.popup.addEventListener('click', function() {
        // this.unlock();
    }.bind(this));
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

Door1.prototype.getButtonsClasses = function () {
    const BUTTONS_COUNT = 4;
    const buttonsNames = [];

    for (let i = 0, len = BUTTONS_COUNT; i < len; ++i) {
        buttonsNames.push('.stairs-riddle__button_' + i);
    }
    buttonsNames.push('.lock__picture');

    return buttonsNames;
}

Door1.prototype.setEventListeners = function (self, buttons, onPointerDown, onPointerUp) {
    buttons.forEach((b) => {
        b.addEventListener('pointerdown', onPointerDown.bind(self));
        b.addEventListener('pointerup', onPointerUp.bind(self));
        b.addEventListener('pointercancel', onPointerUp.bind(self));
        b.addEventListener('pointerleave', onPointerUp.bind(self));
    })
}

Door1.prototype.hideButtons = function (buttons) {
    for (let i = 1, len = buttons.length; i < len; ++i) {
        buttons[i].classList.add('stairs-riddle__button_hidden');
    }
}

Door1.prototype.collapseButtons = function (buttons) {
    for (let i = 0, len = buttons.length; i < len - 1; ++i) {
        buttons[i].classList.remove('stairs-riddle__button_pressed');
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
