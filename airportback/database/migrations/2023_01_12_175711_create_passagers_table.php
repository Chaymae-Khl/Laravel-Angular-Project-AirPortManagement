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
        Schema::create('passagers', function (Blueprint $table) {
            $table->id();
            $table>id_vol();
            $table->string('num_passort',60);
            $table->string('nom');
            $table->string('prenom');
            $table->DATE('date_naissance');
            $table->string('adresse',60);
            $table->integer('tel');
            $table->foreign('id_vol')
            ->references('id')
            ->on('vols');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passagers');
    }
};
