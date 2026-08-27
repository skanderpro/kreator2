<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('build_queues', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('start_year')->unsigned();
            $table->integer('end_year')->unsigned();
            $table->integer('start_quarter')->unsigned();
            $table->integer('end_quarter')->unsigned();
            $table->integer('progress')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('build_queues');
    }
};
