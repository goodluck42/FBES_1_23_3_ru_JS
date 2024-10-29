class Timer {
    constructor(interval, callback) {
        if (typeof interval !== 'number' || typeof callback !== 'function') {
            throw new TypeError();
        }

        this._callback = callback;
        this._enabled = false;
        this._id = null; // private convention
        this._interval = interval;

        Timer.totalCount++;
    }

    start() {
        if (!this._enabled) {
            this._id = setInterval(this._callback, this._interval);
            this._enabled = true;
        }
    }

    stop() {
        if (this._enabled) {
            clearInterval(this._id);
            this._enabled = false;
            this._id = null;
        }
    }

    get enabled() {
        return this._enabled;
    }

    set enabled(value) {
        if (typeof value !== "boolean") {
            throw new TypeError("Value must be a boolean");
        }

        this._enabled = value;
    }

    static totalCount = 0;

    static getTotalTimerCount() {
        return Timer.totalCount;
    }
}

class DebugTimer extends Timer {
    constructor(elementId, interval) {
        super(interval, () => {
            this._element.innerHTML = Date.now().toString();
        });

        this._element = document.getElementById(elementId);
    }

    #debugStart() {
        console.log("debug start");

        return super.start();
    }

    start() {
        return super.start();
    }
}

