it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(10000, 10, 0.045)).toEqual(103.63840875701705);
});
