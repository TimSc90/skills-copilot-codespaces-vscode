function skillsMember() {
  console.log('skillsMember');
  var member = document.getElementById('member');
  var memberSkills = document.getElementById('memberSkills');
  var memberSkillsText = document.getElementById('memberSkillsText');
  memberSkillsText.innerHTML = "Skills";
  memberSkillsText.style.color = "white";
  memberSkills.style.backgroundColor = "#FFA500";
  member.style.display = "block";
}
