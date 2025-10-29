"use client"

import { useLanguage } from "@/contexts/language-context"
import { GraduationCap, Building2, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const courses = [
  {
    title: { en: "Advanced Electronic Archiving Course", ar: "دورة الأرشفة الإلكترونية المتقدمة" },
    date: { en: "June 13, 2024", ar: "13 يونيو 2024" },
    organization: { en: "Royal Oman Police", ar: "شرطة عمان السلطانية" },
  },
  {
    title: { en: "Social Media Marketing Course", ar: "دورة التسويق عبر وسائل التواصل الاجتماعي" },
    date: { en: "October 20, 2024", ar: "20 أكتوبر 2024" },
    organization: {
      en: "Ministry of Agriculture – Royal Court Affairs – Military Academy",
      ar: "وزارة الزراعة – شؤون البلاط السلطاني – الأكاديمية العسكرية",
    },
  },
  {
    title: { en: "Advanced Customer Service Course", ar: "دورة خدمة العملاء المتقدمة" },
    date: { en: "October 27, 2024", ar: "27 أكتوبر 2024" },
    organization: { en: "Orange Card", ar: "البطاقة البرتقالية" },
  },
  {
    title: {
      en: "Artificial Intelligence Tools in Coordination and Follow-up Works",
      ar: "أدوات الذكاء الاصطناعي في أعمال التنسيق والمتابعة",
    },
    date: { en: "November 24, 2024", ar: "24 نوفمبر 2024" },
    organization: { en: "Oman Chamber of Commerce and Industry", ar: "غرفة تجارة وصناعة عمان" },
  },
  {
    title: {
      en: "Dealing with VIPs and Creativity in Customer Interaction",
      ar: "التعامل مع كبار الشخصيات والإبداع في التفاعل مع العملاء",
    },
    date: { en: "December 1, 2024", ar: "1 ديسمبر 2024" },
    organization: {
      en: "Prime Minister's Office – Chamber of Commerce and Industry – Orange Card",
      ar: "مكتب رئيس الوزراء – غرفة التجارة والصناعة – البطاقة البرتقالية",
    },
  },
  {
    title: { en: "Artificial Intelligence Tools in Office Work", ar: "أدوات الذكاء الاصطناعي في العمل المكتبي" },
    date: { en: "December 8, 2024", ar: "8 ديسمبر 2024" },
    organization: {
      en: "Small and Medium Enterprise Development Authority",
      ar: "هيئة تنمية المؤسسات الصغيرة والمتوسطة",
    },
  },
  {
    title: { en: "Facility Management and Fleet Management", ar: "إدارة المرافق وإدارة الأسطول" },
    date: { en: "December 16, 2024", ar: "16 ديسمبر 2024" },
    organization: { en: "Nama Electricity", ar: "نما للكهرباء" },
  },
  {
    title: { en: "Digital Transformation and File Management", ar: "التحول الرقمي وإدارة الملفات" },
    date: { en: "December 22, 2024", ar: "22 ديسمبر 2024" },
    organization: { en: "Oman Chamber of Commerce and Industry", ar: "غرفة تجارة وصناعة عمان" },
  },
  {
    title: { en: "Business Management Using Digital Tools", ar: "إدارة الأعمال باستخدام الأدوات الرقمية" },
    date: { en: "January 6, 2025", ar: "6 يناير 2025" },
    organization: { en: "Ooredoo", ar: "أوريدو" },
  },
  {
    title: { en: "Power BI Course", ar: "دورة Power BI" },
    date: { en: "January 27, 2025", ar: "27 يناير 2025" },
    organization: { en: "Ministry of Energy", ar: "وزارة الطاقة" },
  },
  {
    title: { en: "Power BI Course", ar: "دورة Power BI" },
    date: { en: "February 3, 2025", ar: "3 فبراير 2025" },
    organization: { en: "Ministry of Energy", ar: "وزارة الطاقة" },
  },
  {
    title: { en: "Digital Transformation Course", ar: "دورة التحول الرقمي" },
    date: { en: "April 13, 2025", ar: "13 أبريل 2025" },
    organization: { en: "Nama Water", ar: "نما للمياه" },
  },
  {
    title: { en: "Smart Technologies in Warehouse Management", ar: "التقنيات الذكية في إدارة المستودعات" },
    date: { en: "April 20, 2025", ar: "20 أبريل 2025" },
    organization: {
      en: "Ministry of Justice – Chamber of Commerce and Industry – Sultan Qaboos University Hospital",
      ar: "وزارة العدل – غرفة التجارة والصناعة – مستشفى جامعة السلطان قابوس",
    },
  },
  {
    title: {
      en: "Fundamentals of Artificial Intelligence and Intelligent Data Analysis",
      ar: "أساسيات الذكاء الاصطناعي وتحليل البيانات الذكي",
    },
    date: { en: "May 4, 2025", ar: "4 مايو 2025" },
    organization: { en: "Royal Oman Police – Economic Forum", ar: "شرطة عمان السلطانية – المنتدى الاقتصادي" },
  },
  {
    title: { en: "Stakeholder Management Course", ar: "دورة إدارة أصحاب المصلحة" },
    date: { en: "May 12, 2025", ar: "12 مايو 2025" },
    organization: { en: "Oman Oil", ar: "نفط عمان" },
  },
  {
    title: {
      en: "Leadership and Supervision Dynamics in the Healthcare System",
      ar: "ديناميكيات القيادة والإشراف في النظام الصحي",
    },
    date: { en: "June 1, 2025", ar: "1 يونيو 2025" },
    organization: { en: "Sultan Qaboos University Hospital", ar: "مستشفى جامعة السلطان قابوس" },
  },
  {
    title: {
      en: "Utilizing Modern Technologies in Developing Educational Media",
      ar: "استخدام التقنيات الحديثة في تطوير الوسائط التعليمية",
    },
    date: { en: "June 16, 2025", ar: "16 يونيو 2025" },
    organization: { en: "Ministry of Education", ar: "وزارة التربية والتعليم" },
  },
  {
    title: {
      en: "Follow-up Techniques and Preparing Senior Management Reports",
      ar: "تقنيات المتابعة وإعداد تقارير الإدارة العليا",
    },
    date: { en: "June 23, 2025", ar: "23 يونيو 2025" },
    organization: { en: "University of Eastern Oman", ar: "جامعة شرق عمان" },
  },
  {
    title: { en: "IT Project Management", ar: "إدارة مشاريع تكنولوجيا المعلومات" },
    date: { en: "July 6, 2025", ar: "6 يوليو 2025" },
    organization: { en: "Oman Oil", ar: "نفط عمان" },
  },
  {
    title: {
      en: "Managing Official Meetings of Boards and Committees",
      ar: "إدارة الاجتماعات الرسمية للمجالس واللجان",
    },
    date: { en: "July 13, 2025", ar: "13 يوليو 2025" },
    organization: { en: "Saudi German Hospital", ar: "مستشفى السعودي الألماني" },
  },
  {
    title: { en: "Power BI Course", ar: "دورة Power BI" },
    date: { en: "July 29, 2025", ar: "29 يوليو 2025" },
    organization: { en: "Mithaq Holding", ar: "ميثاق القابضة" },
  },
  {
    title: { en: "Power BI Course", ar: "دورة Power BI" },
    date: { en: "August 3, 2025", ar: "3 أغسطس 2025" },
    organization: { en: "North Al Batinah Governorate", ar: "محافظة شمال الباطنة" },
  },
  {
    title: { en: "Power BI Course (Salalah)", ar: "دورة Power BI (صلالة)" },
    date: { en: "August 10, 2025", ar: "10 أغسطس 2025" },
    organization: { en: "Nama Electricity – Ministry of Commerce", ar: "نما للكهرباء – وزارة التجارة" },
  },
  {
    title: {
      en: "Certified Specialist in Office and Administrative Work",
      ar: "أخصائي معتمد في العمل المكتبي والإداري",
    },
    date: { en: "August 17, 2025", ar: "17 أغسطس 2025" },
    organization: {
      en: "ARA Petroleum – Military College – Al Hosn Company",
      ar: "آرا للبترول – الكلية العسكرية – شركة الحصن",
    },
  },
  {
    title: { en: "Data Analysis with Power BI", ar: "تحليل البيانات باستخدام Power BI" },
    date: { en: "August 31, 2025", ar: "31 أغسطس 2025" },
    organization: { en: "Duqm – Orange Card", ar: "الدقم – البطاقة البرتقالية" },
  },
  {
    title: { en: "Generative Artificial Intelligence (GenAI)", ar: "الذكاء الاصطناعي التوليدي (GenAI)" },
    date: { en: "September 8, 2025", ar: "8 سبتمبر 2025" },
    organization: {
      en: "Duqm – Ministry of Agriculture, Fisheries and Water Resources",
      ar: "الدقم – وزارة الزراعة والثروة السمكية والموارد المائية",
    },
  },
  {
    title: {
      en: "Best Practices in Public Relations and Crisis Management",
      ar: "أفضل الممارسات في العلاقات العامة وإدارة الأزمات",
    },
    date: { en: "September 21, 2025", ar: "21 سبتمبر 2025" },
    organization: { en: "Civil Defense and Ambulance Authority", ar: "هيئة الدفاع المدني والإسعاف" },
  },
  {
    title: { en: "Professional Management of Procurement and Warehousing", ar: "الإدارة المهنية للمشتريات والتخزين" },
    date: { en: "September 28, 2025", ar: "28 سبتمبر 2025" },
    organization: {
      en: "Ministry of Education – Al Buraimi Governorate – Royal Court Affairs",
      ar: "وزارة التربية والتعليم – محافظة البريمي – شؤون البلاط السلطاني",
    },
  },
  {
    title: { en: "Power BI Course", ar: "دورة Power BI" },
    date: { en: "October 5, 2025", ar: "5 أكتوبر 2025" },
    organization: { en: "National Center for Statistics and Information", ar: "المركز الوطني للإحصاء والمعلومات" },
  },
  {
    title: { en: "Mastering Microsoft Excel Skills", ar: "إتقان مهارات Microsoft Excel" },
    date: { en: "October 12, 2025", ar: "12 أكتوبر 2025" },
    organization: { en: "Ministry of Education", ar: "وزارة التربية والتعليم" },
  },
]

export function CoursesSection() {
  const { language } = useLanguage()

  return (
    <section id="courses" className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === "en" ? "Professional Training" : "التدريب المهني"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {language === "en" ? (
              <>
                Training Courses in <span className="text-primary">Sultanate of Oman</span>
              </>
            ) : (
              <>
                الدورات التدريبية في <span className="text-primary">سلطنة عمان</span>
              </>
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "en"
              ? "Empowering organizations across Oman with cutting-edge AI, digital transformation, and business intelligence training"
              : "تمكين المؤسسات في جميع أنحاء عمان بالتدريب المتطور في الذكاء الاصطناعي والتحول الرقمي وذكاء الأعمال"}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6 space-y-4">
                {/* Course Title */}
                <h3 className="text-lg font-semibold text-[#00FFD1] group-hover:text-[#00FFD1]/80 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {course.title[language]}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-violet-400">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{course.date[language]}</span>
                </div>

                {/* Organization */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{course.organization[language]}</span>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-colors" />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">
              {language === "en" ? "Training Courses" : "دورة تدريبية"}
            </div>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">
              {language === "en" ? "Organizations Trained" : "مؤسسة مدربة"}
            </div>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">2024-2025</div>
            <div className="text-sm text-muted-foreground">
              {language === "en" ? "Training Period" : "فترة التدريب"}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
