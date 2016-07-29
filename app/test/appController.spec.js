describe('--The functionality of the app controller', function () {

    var appController, scope;

    beforeEach(function(){
        module('app');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        appController = $controller('appController', {
            $scope: scope
        });
    }));


    describe('Initialization of Controller and values', function () {
        it('should have a controller defined', function () {
            expect(appController).toBeDefined();
        })
    });

    describe('working with the scope of the controller', function(){

        it('should have a sample object of some kind', function(){
            expect(scope.sampleVariable.length).toBe(1);
        })

    });

});
