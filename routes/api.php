<?php

use App\Http\Controllers\Api\ApartmentController;
use App\Http\Controllers\Api\BuildStepController;
use App\Http\Controllers\Api\GalleryItemsController;
use App\Http\Controllers\Api\NewsController;
use Illuminate\Support\Facades\Route;

Route::name('news.')->prefix('/news')->group(function () {
    Route::get('', [NewsController::class, 'index'])->name('index');
    Route::get('/{news}', [NewsController::class, 'show'])->name('show');
});

Route::name('gallery-items.')->prefix('/gallery-items')->group(function () {
    Route::get('', [GalleryItemsController::class, 'index'])->name('index');
});

Route::name('build-step.')->prefix('/build-steps')->group(function () {
    Route::get('', [BuildStepController::class, 'index'])->name('index');
});


Route::name('apartments.')->prefix('/apartments')->group(function () {
    Route::get('', [ApartmentController::class, 'index'])->name('index');
    Route::get('/{apartment}', [ApartmentController::class, 'show'])->name('show');
    Route::get('/min-max-price', [ApartmentController::class, 'minMaxPrice'])->name('minMaxPrice');
    Route::get('/min-max-area', [ApartmentController::class, 'minMaxArea'])->name('minMaxArea');
});
