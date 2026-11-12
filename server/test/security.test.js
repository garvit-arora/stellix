import test from 'node:test';import assert from 'node:assert/strict';import {canManage,slugify,RESERVED,tenantSlugFromHost} from '../src/security.js';
test('normalizes organization names into DNS-safe slugs',()=>assert.equal(slugify('  Stellar Project #42  '),'stellar-project-42'));
test('protects reserved application subdomains',()=>assert.equal(RESERVED.has('api'),true));
test('only owner and admin can manage an organization',()=>{assert.equal(canManage('owner'),true);assert.equal(canManage('admin'),true);assert.equal(canManage('viewer'),false)});
test('extracts only a valid tenant from the configured root domain',()=>{assert.equal(tenantSlugFromHost('coverfi.stellix.app','stellix.app'),'coverfi');assert.equal(tenantSlugFromHost('stellix.app','stellix.app'),null);assert.equal(tenantSlugFromHost('coverfi.attacker.test','stellix.app'),null)});
