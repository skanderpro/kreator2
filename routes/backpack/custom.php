<?php

use Illuminate\Support\Facades\Route;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\CRUD.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix' => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace' => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('apartment', 'ApartmentCrudController');
    Route::crud('build-step', 'BuildStepCrudController');
    Route::crud('gallery-item', 'GalleryItemCrudController');
    Route::crud('news', 'NewsCrudController');
    Route::crud('user', 'UserCrudController');
    Route::crud('document', 'DocumentCrudController');
    Route::crud('feature', 'FeatureCrudController');
}); // this should be the absolute last line of this file

/**
 * DO NOT ADD ANYTHING HERE.
 */
