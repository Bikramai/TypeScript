class SeatAssignment {
    // a1, a2, .....
    // Bikram, ikram, ...
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.a1 = 'Bikram';
//seats['a1'] = 'Bikram';
seats.a2 = 'ikram';