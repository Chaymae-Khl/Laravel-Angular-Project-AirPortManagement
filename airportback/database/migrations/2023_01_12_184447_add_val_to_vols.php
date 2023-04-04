<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vols', function (Blueprint $table) {
            $table->string('aeroport_depart');
            $table->string('aeroport_arrive');
            $table->string('terminal_depart');
            $table->string('teminal_arrive');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vols', function (Blueprint $table) {
            //
        });
    }
};
