test('makeSound should play leftCrash sound when key is "A"', () => {
    const playMock = jest.fn();
    window.Audio = jest.fn(() => ({
        play: playMock
    }));

    makeSound("A");

    expect(window.Audio).toHaveBeenCalledWith("sounds/leftCrash.mp3");
    expect(playMock).toHaveBeenCalled();
});

jest.useFakeTimers();

test('buttonAnimation should add and remove "pressed" class', () => {
    // Configura um botão falso no DOM
    document.body.innerHTML = `<button class="a drum"></button>`;
    const button = document.querySelector(".a");

    buttonAnimation("a");

    expect(button.classList.contains("pressed")).toBe(true);

    // Avança o tempo de 100ms
    jest.advanceTimersByTime(100);

    expect(button.classList.contains("pressed")).toBe(false);
});

test('makeSound with invalid key should not play any sound', () => {
    const playMock = jest.fn();
    window.Audio = jest.fn(() => ({
        play: playMock
    }));

    makeSound("X");

    expect(playMock).not.toHaveBeenCalled();
});
