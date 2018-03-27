/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.unicafe;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class KassapaateTest {
    
    Kassapaate kassapaate;
    Maksukortti kortti;
    
    public KassapaateTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        this.kassapaate = new Kassapaate();
        this.kortti = new Maksukortti(1000);
    }
    
    @After
    public void tearDown() {
    }
    
    @Test
    public void kassapaatteenRahamaaraOikea() {
        assertEquals("100000", Integer.toString(kassapaate.kassassaRahaa()));   
    }
    
    @Test 
    public void maukkaidenLounaidenMaaraOikea() {
        assertEquals(0, kassapaate.maukkaitaLounaitaMyyty());
    }
    
    @Test
    public void edullistenLounaidenMaaraOikea() {
        assertEquals(0, kassapaate.edullisiaLounaitaMyyty());
    }

    //KÄTEINEN
     
    @Test 
    public void syoEdullisestiKateisostoKasvattaaRahaaKassassaVaihtorahaOk() {
        kassapaate.syoEdullisesti(240);
        assertEquals(100240, kassapaate.kassassaRahaa());
        assertEquals(10, kassapaate.syoEdullisesti(250)); 
    }
    
    @Test
    public void syoMaukkaastiKateisostoKasvattaaRahaaKassassaVaihtorahaOk() {
        kassapaate.syoMaukkaasti(400);
        assertEquals(100400, kassapaate.kassassaRahaa());
        assertEquals(10, kassapaate.syoMaukkaasti(410));
    }
    
    @Test 
    public void syoEdullisestiKateisostoKasvattaaMyytyjenLounaidenMaaraa() {
        kassapaate.syoEdullisesti(240);
        assertEquals(1, kassapaate.edullisiaLounaitaMyyty());     
    }
    
    @Test 
    public void syoMaukkaastiKateisostoKasvattaaMyytyjenLounaidenMaaraa() {
        kassapaate.syoMaukkaasti(400);
        assertEquals(1, kassapaate.maukkaitaLounaitaMyyty());     
    }
    
    @Test 
    public void syoEdullisestiKateisostoKelvotonMaksuEiVaikutaRahaanKassassa() {
        kassapaate.syoEdullisesti(100);
        assertEquals(100000, kassapaate.kassassaRahaa());
    }
    
    @Test
    public void syoMaukkaastiKateisostoKelvotonMaksuEiVaikutaRahaanKassassa() {
        kassapaate.syoMaukkaasti(100);
        assertEquals(100000, kassapaate.kassassaRahaa());
    }
    
    @Test 
    public void syoEdullisestiKateisostoKelvotonMaksuVaihtorahaOikein() {
        assertEquals(100, kassapaate.syoEdullisesti(100));
    }
    
    @Test
    public void syoMaukkaastiKateisostoKelvotonMaksuVaihtorahaOikein() {
        assertEquals(100, kassapaate.syoMaukkaasti(100));
    }
    
    @Test
    public void syoEdullisestiKateisostoKelvotonMaksuLounaidenMaaraEiMuutu() {
        kassapaate.syoEdullisesti(100);
        assertEquals(0, kassapaate.edullisiaLounaitaMyyty());     
    }
    
    @Test
    public void syoMaukkaastiKateisostoKelvotonMaksuLounaidenMaaraEiMuutu() {
        kassapaate.syoMaukkaasti(100);
        assertEquals(0, kassapaate.maukkaitaLounaitaMyyty());     
    }
    
    
    
    @Test
    public void syoEdullisestiKorttiostoVeloittaaOikeinJaPalauttaaTrue() {
        assertEquals(true, kassapaate.syoEdullisesti(kortti));
        assertEquals(760, kortti.saldo());
    }
    
    @Test
    public void syoMaukkaastiKorttiostoVeloittaaOikeinJaPalauttaaTrue() {
        assertEquals(true, kassapaate.syoMaukkaasti(kortti));
        assertEquals(600, kortti.saldo());
    }
    
    @Test 
    public void syoEdullisestiKorttiostoKasvattaaMyytyjenLounaidenMaaraa() {
        kassapaate.syoEdullisesti(kortti);
        assertEquals(1, kassapaate.edullisiaLounaitaMyyty());     
    }
    
    @Test
    public void syoMaukkaastiKorttiostoKasvattaaMyytyjenLounaidenMaaraa() {
        kassapaate.syoMaukkaasti(kortti);
        assertEquals(1, kassapaate.maukkaitaLounaitaMyyty());     
    }
    
    @Test
    public void syoEdullisestiKorttiostoKelvotonMaksuLounaidenMaaraEiMuutu() {
        kortti.otaRahaa(900); 
        kassapaate.syoEdullisesti(kortti);
        assertEquals(100, kortti.saldo());
        assertEquals(0, kassapaate.edullisiaLounaitaMyyty());
        assertEquals(false, kassapaate.syoEdullisesti(kortti));
    }
    
    @Test
    public void syoMaukkaastiKorttiostoKelvotonMaksuLounaidenMaaraEiMuutu() {
        kortti.otaRahaa(900); 
        kassapaate.syoMaukkaasti(kortti);
        assertEquals(0, kassapaate.maukkaitaLounaitaMyyty());
        assertEquals(100, kortti.saldo());
        assertEquals(false, kassapaate.syoEdullisesti(kortti));
    }
    
    @Test 
    public void syoEdullisestiKorttiostoEiVaikutaKassaan() {
        kassapaate.syoEdullisesti(kortti);
        assertEquals(100000, kassapaate.kassassaRahaa());     
    }
    
    @Test 
    public void syoMaukkaastiKorttiostoEiVaikutaKassaan() {
        kassapaate.syoMaukkaasti(kortti);
        assertEquals(100000, kassapaate.kassassaRahaa());
    }
    
    @Test 
    public void kortilleLataaminenKasvattaaSaldoajaRahaaKassassa() {
        kassapaate.lataaRahaaKortille(kortti, 200);
        assertEquals(1200, kortti.saldo());
        assertEquals(100200, kassapaate.kassassaRahaa());
    }
    
    @Test
    public void KortilleLataaminenKelvottomallaSummaEiVaikutaSaldoonTaiKassaan() {
        kassapaate.lataaRahaaKortille(kortti, -200);
        assertEquals(1000, kortti.saldo());
        assertEquals(100000, kassapaate.kassassaRahaa());
    }
}
