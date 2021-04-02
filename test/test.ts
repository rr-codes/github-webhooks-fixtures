import {getFixture} from "../src";

describe('#getFixture', () => {
    it('should get a fixture', function () {
        const fixture = getFixture('installation.created');
        expect(fixture).toBeDefined();

        expect(fixture!.installation.id).toBe(957387);

        const fixture2 = getFixture('installation');
        expect(fixture2).toBeDefined();

        expect(fixture2!.installation.id).toBe(2);
    });
});
