describe('products', function () {

    beforeEach(module('app'));

    var $controller;
    var $location;
    var $httpBackend;
    var productsService;
    var $modal;

    beforeEach(inject(function (_$controller_, _$location_, _$httpBackend_, _productsService_, _$modal_) {
        $controller = _$controller_;
        $location = _$location_;
        $httpBackend = _$httpBackend_;
        productsService = _productsService_;
        $modal = _$modal_;
    }));

    describe('products', function () {

        var controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('products', {productsService: ProductsService});

            $httpBackend.whenGET('api/products').respond(function (method, url, data) {
                var products = [{
                            id: 1,
                            title: "AngularJS",
                            creationDate: "1288444623006",
                            duration: "200",
                            description: "HTML enhanced for web apps!",
                            categorys: []
                        },
                        {
                            id: 2,
                            title: "BackboneJS",
                            creationDate: "1288555623006",
                            duration: "320",
                            description: "Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.",
                            categorys: []
                        },
                        {
                            id: 3,
                            title: "KnockoutJS",
                            creationDate: "1288888623006",
                            duration: "380",
                            description: "Simplify dynamic JavaScript UIs with the Model-View-View Model (MVVM)",
                            categorys: []
                        },
                        {
                            id: 4,
                            title: "Dojo",
                            creationDate: "1288377723006",
                            duration: "450",
                            description: "A JavaScript toolkit that saves you time and scales with your development process.",
                            categorys: []
                        }];
                return [200, products, {}];
            });
        });

        it('should change location when call add method', inject(function () {
            spyOn($location, 'path');
            controller.add();
            expect($location.path).toHaveBeenCalledWith('/products/new');
        }));

        it('should change location when call edit method', inject(function () {
            spyOn($location, 'path');
            controller.edit(1);
            expect($location.path).toHaveBeenCalledWith('/products/1');
        }));

        it('should call getproducts() of productService when call getAll()', inject(function () {
            spyOn(productsService, 'query');
            controller.getproducts();
            expect(productsService.query).toHaveBeenCalled();
        }));

        it('should call $modal.open() when call openModal', inject(function () {
            spyOn($modal, 'open');
            controller.openModal(1, 'AngularJS');
            expect($modal.open).toHaveBeenCalled();
        }));
    });
});