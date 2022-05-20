

function EpiiSetInterval(time, once_callback, finish_callback) {
    let time_old = time;
    let onTime = [];
    let onOnceCallaback = [];
    let isPause = false;

    if (once_callback) {
        onOnceCallaback.push(once_callback);
    }
    if (finish_callback) {
        onTime.push(finish_callback);
    }
    function doOnce() {
        if (onOnceCallaback.length > 0) onOnceCallaback.forEach(f => f(time));
    }
    function doFinish() {
        if (onTime.length > 0) onTime.forEach(f => f());
    }

    doOnce();
    let thread = setInterval(() => {
        if (isPause) return;
        time--;
        if (time >= 0) {
            doOnce();
        }
        if (time === 0) {
            clearInterval(thread);
            doFinish();
        }
    }, 1000)

    return {
        onTime(callback) {
            onTime.push(callback);
            return this;
        },

        onFinish(callback) {
            onTime.push(callback);
            return this;
        },
        removeFinishCallback(callback) {
            if (callback == null) {
                onTime = [];
                return;
            }
            var index = onTime.indexOf(callback);
            if (index > -1) {
                onTime.splice(index, 1);
            }
        },
        reset(t = null) {
            time = t == null ? time_old : t;
        },
        onOnce(callback) {
            onOnceCallaback.push(callback);
            return this;
        },
        removeOnceCallback(callback) {
            if (callback == null) {
                onOnceCallaback = [];
                return;
            }
            var index = onOnceCallaback.indexOf(callback);
            if (index > -1) {
                onOnceCallaback.splice(index, 1);
            }
        },


        stop() {
            if (thread) {
                clearInterval(thread);
                onTime = [];
                onOnceCallaback = [];
                thread = null;
            }
        },
        pause() {
            isPause = true;
        },
        continue() {
            isPause = false;
        }
    }

}

let default_thread = null;
module.exports = {
    EpiiSetInterval: EpiiSetInterval,

    start(time = 60000, onFinishCallback = null, onOnceCallaback = null) {
        default_thread = EpiiSetInterval(time, onOnceCallaback, onFinishCallback);
        return default_thread;
    },
    onTime(callback) {
        if (default_thread)
            default_thread.onTime(callback);
        return this;
    },

    onFinish(callback) {
        if (default_thread)
            default_thread.onFinish(callback);
        return this;
    },
    removeFinishCallback(callback) {
        if (default_thread)
            default_thread.removeFinishCallback(callback);
    },
    reset(time = null) {
        if (default_thread)
            default_thread.reset(callback);
    },
    onOnce(callback) {
        if (default_thread)
            default_thread.onOnce(callback);
    },
    removeOnceCallback(callback) {
        if (default_thread)
            default_thread.removeOnceCallback(callback);
    },


    stop() {
        if (default_thread)
            default_thread.stop(callback);
    },
    pause() {
        if (default_thread)
            default_thread.pause(callback);
    },
    continue() {
        if (default_thread)
            default_thread.continue(callback);
    }


}