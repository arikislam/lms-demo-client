export const sidebar = function () {
    return [
        {
            title: 'Home',
            icon: 'sv-icon sv-home',
            route: 'admin.home',
            isActive: true,
            activeRoutes: [
                'admin.home'
            ]
        },
        {
            title: 'Coupons',
            icon: 'sv-icon sv-gift',
            route: 'admin.coupons.list',
            isActive: false,
            activeRoutes: [
                'admin.coupons.list',
                'admin.coupons.edit',
                'admin.coupons.create'
            ]
        },
        {
            title: 'Courses',
            icon: 'sv-icon sv-gift',
            route: 'admin.courses.list',
            isActive: false,
            activeRoutes: [
                'admin.courses.list',
                'admin.courses.details'
            ]
        },


    ];
}