<?php

use App\Http\Controllers\Api\ApartmentController;
use App\Http\Controllers\Api\BuildStepController;
use App\Http\Controllers\Api\ContactRequestController;
use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\FeatureController;
use App\Http\Controllers\Api\GalleryItemsController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\Api\TechnologyController;
use Illuminate\Support\Facades\Route;

Route::name('news.')->prefix('/news')->group(function () {
    Route::get('', [NewsController::class, 'index'])->name('list');
    Route::get('/{news}', [NewsController::class, 'show'])->name('showOne');
});

Route::name('gallery-items.')->prefix('/gallery-items')->group(function () {
    Route::get('', [GalleryItemsController::class, 'index'])->name('index');
});

Route::name('build-step.')->prefix('/build-steps')->group(function () {
    Route::get('', [BuildStepController::class, 'index'])->name('list');
});


Route::name('apartments.')->prefix('/apartments')->group(function () {
    Route::get('', [ApartmentController::class, 'index'])->name('index');

    Route::get('/meta', [ApartmentController::class, 'getMeta'])->name('getMeta');
    Route::get('/unsold-count', [ApartmentController::class, 'unsoldCount'])->name('unsoldCount');
    Route::get('/{apartment}', [ApartmentController::class, 'show'])->name('show');
});

Route::name('features.')->prefix('/features')->group(function () {
    Route::get('', [FeatureController::class, 'index'])->name('index');
});

Route::name('documents.')->prefix('/documents')->group(function () {
    Route::get('', [DocumentController::class, 'index'])->name('index');
});

Route::name('settings.')->prefix('/settings')->group(function () {
    Route::get('', [SettingsController::class, 'index'])->name('index');
});

Route::name('technology.')->prefix('/technology')->group(function () {
    Route::get('', [TechnologyController::class, 'index'])->name('list');
});

Route::name('contact-request.')->prefix('/contact-request')->group(function () {
    Route::post('', [ContactRequestController::class, 'store'])->name('storeOne');
});
