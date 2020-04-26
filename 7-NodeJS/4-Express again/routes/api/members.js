const express = require('express');
const router = express.Router();
let members = require('../../members.js');
const uuid = require('uuid');

router.get('/', (req, res) => res.json(members));

router.get('/:id', (req, res) => {
  const found = members.some((member) => {
    return member.id === parseInt(req.params.id); //Filter return  Array
  });
  if (found) {
    res.json(
      members.filter((member) => {
        return member.id === parseInt(req.params.id); //Filter return  Array
      })
    );
  } else {
    res.status(404).json({
      msg: `Member with id ${req.params.id} not found`,
    });
  }
});

router.post('/', (req, res) => {
  //res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };
  // console.log('starts test: ', newMember, '---', req.body.email);

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({
      msg: 'Name and Email is not added, please add Name & Email',
    });
  }
  members.push(newMember);
  res.json(members);
});

router.put('/:id', (req, res) => {
  //res.send(req.body);
  const found = members.some((member) => member.id === parseInt(req.params.id));
  // console.log('starts test: ', newMember, '---', req.body.email);
  console.log('Marker2:', req.params.id);
  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;
        res.json({ msg: `Update member,`, member });
      } else {
        return res.status(400).json({
          msg: `No member found with the id of:  ${req.params.id}`,
        });
      }
    });
  }
});

router.delete('/:id', (req, res) => {
  const found = members.some((member) => {
    return member.id === parseInt(req.params.id); //Filter return  Array
  });
  members = members.filter((member) => member.id !== parseInt(req.params.id));
  if (found) {
    res.json({
      msg: 'Member deleted:',
      members: members,
    });
  } else {
    res.status(404).json({
      msg: `Member with id ${req.params.id} not found`,
    });
  }
});

module.exports = router;
