describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
    });
    describe('app', function () {
        'use strict';

        var app = window.app;

        describe('assignToSwimmingCourse', function () {
            it('should assign adult person to adult group', function () {
                expect(app.assignToSwimmingCourse('Jelly', '10/10/1995')).toEqual({
                    name: 'Jack', age: 20, course: 'adults'
                });
            });
            it('should assign person between the ages of 12 - 17 to teens group', function () {
                expect(app.assignToSwimmingCourse('John', '07/10/2003')).toEqual({
                    name: 'John', age: 14, course: 'adult'
                });
            });
            it('should assign person below 12 to kids group', function () {
                expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                    name: 'Zack', age: 5, course: 'adult'
                });
            });
//=====================
            it('should assign adult person to adult group', function () {
                expect(app.assignToSwimmingCourse('Ann', '01/08/1900')).toEqual({
                    name: 'Ann', age: 21, course: 'young'
                });
            });

            it('should assign person between the ages of 12 - 17 to teens group', function () {
                expect(app.assignToSwimmingCourse('Jessie', '07/10/2013')).toEqual({
                    name: 'Jessie', age: 13, course: 'adult'
                });
            });

        });
});
});


