import { displayRow } from './app'

describe("display", () => {
    describe("row ", () => {
        describe('empty row', () => {
            test('displays , , ,', () => {
                expect(displayRow(['','','',''])).toBe(",,,");
            })
        })
        describe('full row', () => {
            test('displays correct contents', () => {
                const row = [1,1,1,1]
                expect(displayRow(row)).toBe('1,1,1,1')
            })
        })
        describe('partially full row', () => {
            test('empty at the end', () => {
                const row = [1,1,1,'']
                expect(displayRow(row)).toBe('1,1,1,')
            })
            test('empty at the start', () => {
                const row = ['',1,1,1]
                expect(displayRow(row)).toBe(',1,1,1')
            })
            test('empty in the middle', () => {
                const row = [1,'',1,1]
                expect(displayRow(row)).toBe('1,,1,1')
            })
        })
    })
})

