const { default: MemberManageStore } = require('./MemberManageStore');

const context = describe;

describe('memberManageStore', () => {
  let memberManageStore;

  beforeEach(() => {
    memberManageStore = new MemberManageStore();
  });

  describe('fetchMembers', () => {
    it('fetchMembers', async () => {
      await memberManageStore.fetchMembers();

      expect(memberManageStore.members.length).toEqual(3);
    });
  });

  describe('find', () => {
    it('find', async () => {
      await memberManageStore.find(1);

      expect(memberManageStore.member.name).toEqual('오진성');
    });
  });
});
