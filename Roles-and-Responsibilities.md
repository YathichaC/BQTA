# TS-Com Project: Roles, Responsibilities & Boundaries Matrix

---

# Team Role Assignment Table

| Role | Assigned To | Primary Responsibilities | Secondary Responsibilities | Decision Authority | Reporting To |
|---|---|---|---|---|---|
| Architect | ศวัสกร แว่นแก้ว | • ออกแบบสถาปัตยกรรมระบบทั้งหมด <br> • กำหนดโครงสร้าง Layer และ Interface <br> • กำหนดโปรโตคอล Bio-Quantum <br> • จัดทำเอกสาร Architecture | • ตรวจสอบโค้ดระดับโครงสร้าง <br> • ควบคุม Technical Debt | • ตัดสินใจด้านการออกแบบ <br> • อนุมัติการเปลี่ยน Interface <br> • เลือกเทคโนโลยีหลัก | Instructor |
| Engineer | ญาทิชา จันทรศรีสุริยวงศ์ | • พัฒนาโมดูลหลักของระบบ <br> • เขียนอัลกอริทึม Bio-Quantum Processing <br> • พัฒนา Simulation | • ปรับปรุงประสิทธิภาพ <br> • แก้ไขข้อบกพร่อง <br> • จัดทำเอกสารโค้ด | • แนวทางการพัฒนา <br> • โครงสร้างโค้ด <br> • เลือกเครื่องมือพัฒนา | Architect |
| Specialist | กนกพร บุญครอง | • วิจัยด้านชีวภาพ-ควอนตัม <br> • กำหนดกฎการตอบสนองสัมผัส <br> • ให้ความรู้เฉพาะทาง | • วิเคราะห์กรณีผิดปกติ <br> • จัดทำเอกสารเชิงวิชาการ <br> • สร้างสถานการณ์ทดสอบ | • การตัดสินใจเชิงโดเมน <br> • กฎ Bio-Tactile <br> • ทิศทางการวิจัย | Architect |
| DevOps | ชิดชนก ชนะพา | • ตั้งค่าสภาพแวดล้อมระบบ <br> • ดูแล CI/CD Pipeline <br> • จัดการ Version Control | • ประสานการรวมระบบ <br> • Build Automation <br> • Hosting เอกสาร | • วิธีการ Deploy <br> • เครื่องมือ DevOps <br> • กลยุทธ์ Branch | Engineer |
| Tester/QA | อรปรีญา แซ่โซ้ง | • วางแผนการทดสอบ <br> • สร้าง Test Case <br> • ติดตาม Bug | • วัดคุณภาพระบบ <br> • UAT และ Performance Test <br> • ตรวจเอกสาร | • เกณฑ์คุณภาพ <br> • Test Coverage <br> • ความพร้อม Release | All |

---

# Detailed Responsibility Matrix — By Project Phase

## Week 1: Foundation

| Role | Responsibilities |
|---|---|
| Architect | ออกแบบ Layer และ Interface, สร้าง Architecture Diagram |
| Engineer | ศึกษาเครื่องมือและสร้าง Prototype |
| Specialist | วิจัยหลักการ Bio-Quantum และกำหนดกฎพื้นฐาน |
| DevOps | สร้าง Repository และตั้งค่า Environment |
| Tester/QA | สร้าง Template แผนทดสอบและระบบติดตาม Bug |

---

## Week 2: Implementation

| Role | Responsibilities |
|---|---|
| Architect | ตรวจสอบการพัฒนาให้ตรงตามแบบ |
| Engineer | พัฒนาโมดูลหลัก เช่น Processing Engine และ Network Logic |
| Specialist | ตรวจสอบความถูกต้องเชิงโดเมน |
| DevOps | จัดการ Branch และ Integration |
| Tester/QA | เขียน Unit Test และทดสอบรายวัน |

---

## Week 3: Integration

| Role | Responsibilities |
|---|---|
| Architect | ตรวจสอบความสอดคล้องของระบบ |
| Engineer | รวมโมดูลและแก้ Integration Bug |
| Specialist | ตรวจสอบสถานการณ์พิเศษ |
| DevOps | ดูแล Build และ Deployment |
| Tester/QA | Integration Testing และ Regression Testing |

---

## Week 4: Delivery

| Role | Responsibilities |
|---|---|
| Architect | ตรวจสอบสถาปัตยกรรมขั้นสุดท้าย |
| Engineer | เตรียม Demo และปรับปรุงโค้ด |
| Specialist | ตรวจสอบความถูกต้องทางวิชาการ |
| DevOps | จัดแพ็กเกจส่งงาน |
| Tester/QA | ทดสอบขั้นสุดท้ายและรายงานคุณภาพ |

---

# Responsibility Area Matrix — By Component

| Component | Design Owner | Implementation Owner | Testing Owner | Documentation Owner |
|---|---|---|---|---|
| Bio-Quantum Interface | Architect | Engineer | Tester/QA | Architect |
| Tactile Processing Engine | Architect + Specialist | Engineer | Tester/QA | Engineer |
| Sensory Protocol | Specialist | Engineer + Specialist | Tester/QA + Specialist | Specialist |
| Session Management | Architect | Engineer | Tester/QA | Engineer |
| Simulation Framework | Architect | Engineer | Tester/QA | DevOps |
| Visualization | Architect | Engineer | Tester/QA | DevOps |
| Testing Framework | Tester/QA | Tester/QA + DevOps | Tester/QA | Tester/QA |
| Documentation | All | All | Tester/QA | DevOps |

---

# Decision Authority Matrix

| Decision Type | Architect | Engineer | Specialist | DevOps | Tester/QA | Instructor |
|---|---|---|---|---|---|---|
| Architecture Changes | Approve | Consult | Consult | Consult | Consult | Final |
| Technology Selection | Propose | Approve | Consult | Consult | Consult | Review |
| Protocol Design | Approve | Propose | Consult | — | Consult | — |
| Implementation Approach | Review | Approve | Consult | Consult | — | — |
| Domain Rule Changes | Review | Consult | Approve | — | Consult | — |
| Testing Strategy | Consult | Consult | Consult | — | Approve | — |
| Release Readiness | Consult | Consult | Consult | Propose | Approve | Final |
| Documentation Final | Review | Review | Review | Approve | Review | — |

---

# Communication Boundaries

## Escalation Path

```
Issue Discovery
      ↓
Owner fixes issue (within 4 hours)
      ↓
Escalate to Architect (2 hours)
      ↓
Team Meeting (1 hour)
      ↓
Escalate to Instructor if unresolved
```

---

# Boundaries of Responsibility

## Architect

**In Scope**

- System architecture design
- Interface definition
- Technology selection
- Design pattern enforcement

**Out of Scope**

- Detailed coding
- Daily bug fixing
- Writing test cases

---

## Engineer

**In Scope**

- Core system development
- Algorithm implementation
- Performance optimization

**Out of Scope**

- Architecture decisions
- Deep domain research
- CI/CD management

---

## Specialist

**In Scope**

- Bio-Quantum domain knowledge
- Scientific modeling
- Edge case analysis

**Out of Scope**

- Core system coding
- Infrastructure setup
- Automation testing

---

## DevOps

**In Scope**

- Environment and infrastructure
- CI/CD pipelines
- Version control
- Build and deployment

**Out of Scope**

- Algorithm design
- Protocol development
- Domain research

---

## Tester / QA

**In Scope**

- Test planning and execution
- Bug tracking
- Quality evaluation
- Release validation

**Out of Scope**

- System architecture design
- Development decisions
- Infrastructure setup

---

# RACI Matrix

| Activity | Architect | Engineer | Specialist | DevOps | Tester/QA |
|---|---|---|---|---|---|
| Architecture Definition | R/A | C | C | I | I |
| Implementation | I | R/A | C | C | I |
| Domain Rules | C | C | R/A | — | C |
| Environment Setup | I | C | — | R/A | C |
| Integration Testing | C | C | I | C | R/A |
| System Testing | C | I | C | I | R/A |
| Release Management | C | C | I | R/A | C |
| Final Submission | I | I | I | R/A | C |

---

# Time Allocation Boundaries

| Role | Coding | Design | Testing | Documentation | Meetings | Research |
|---|---|---|---|---|---|---|
| Architect | 10% | 40% | 10% | 20% | 15% | 5% |
| Engineer | 60% | 10% | 10% | 10% | 5% | 5% |
| Specialist | 20% | 20% | 20% | 15% | 10% | 15% |
| DevOps | 30% | 10% | 10% | 30% | 15% | 5% |
| Tester/QA | 10% | 20% | 40% | 15% | 10% | 5% |

---

# Conflict Resolution Boundaries

| Conflict Type | Resolution Path | Escalation Time |
|---|---|---|
| Technical Disagreement | Architect Decision | 24 hrs |
| Implementation Approach | Engineer + Architect | 48 hrs |
| Domain Rule Issue | Specialist Final Say | 24 hrs |
| Testing Priority | Tester/QA Decision | 24 hrs |
| Integration Issue | DevOps Coordination | 12 hrs |
| Schedule Conflict | Team Vote → Instructor | 48 hrs |

---

# Sign-off Matrix

| Deliverable | Author | Reviewer | Approver |
|---|---|---|---|
| Architecture Spec | Architect | All | Instructor |
| Implementation Plan | DevOps | All | Architect |
| Source Code | Engineer | Architect + QA | Engineer |
| Test Plan | Tester/QA | Engineer | Tester/QA |
| User Documentation | DevOps | All | Architect |
| Demo Video | Engineer | All | DevOps |
| Final Presentation | All | All | Instructor |
| Submission Package | DevOps | All | Instructor |

---

# Role Boundaries Quick Reference

| Role | Primary Zone | Stay Out Of |
|---|---|---|
| Architect | Design, Interfaces | Detailed coding |
| Engineer | Implementation | Architecture decisions |
| Specialist | Domain knowledge | Core coding |
| DevOps | Infrastructure | Algorithm design |
| Tester/QA | Testing & Quality | Implementation |