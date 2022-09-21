import {ship} from './ships'



test('Returns the correct ship size ', () => {
    const newship= ship(4);

    expect(newship.length).toEqual(4)
  });



test('Returns the correct container for the ship', () => {
  const newship= ship(4);

  expect(newship.shipContainer).toEqual(["O","O","O","O"])
});




test('Returns the correct container for the ship after getting hit', () => {
  const newship= ship(4);
  newship.hit(0)
  newship.hit(1)
  newship.hit(3)

  expect(newship.shipContainer).toEqual(["hit","hit","O","hit"])
});


test('Evaluates if the ship is sunk', () => {
  const newship= ship(4);
  newship.hit(0)
  newship.hit(1)
  
  newship.hit(3)

  expect(newship.isSunk()).toEqual(false)
});

test('Evaluates if the ship is sunk', () => {
  const newship= ship(4);
  newship.hit(0)
  newship.hit(1)
  newship.hit(2)
  newship.hit(3)

  expect(newship.isSunk()).toEqual(true)
});

