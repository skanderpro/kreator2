<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/news', [App\Http\Controllers\Api\NewsController::class, 'index'])->name('news.index');
Route::get('/gallery-items', [App\Http\Controllers\Api\GalleryItemsController::class, 'index'])->name('gallery-item.index');
Route::get('/build-steps', [App\Http\Controllers\Api\BuildStepController::class, 'index'])->name('build-step.index');
