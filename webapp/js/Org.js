/**
 * ||表示对象如果Org为null或undefined，则将Org初始化空对象（即{}），否则Org不变。 目的是防止Org为null或未定义的错误
 */
var Org = Org || {};

Org.orgid = "1_13";
Org.orgname = "云南中调";

Org.getOrgInfo = function() {
	alert("ydft");
}

Org.SetOrgInfo = function() {
	var createOrg = function() {
		return "研发中心";
	}
	this.orgname = createOrg();
}